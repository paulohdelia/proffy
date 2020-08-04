import { Request, Response } from 'express';
import db from '../database/connection';
import convertHourToMinutes from '../utils/convertHourToMinutes';

interface ScheduleItem {
  week_day: number;
  from: string;
  to: string;
}

async function post(request: Request, response: Response) {
  const { name, avatar, whatsapp, bio, subject, cost, schedule } = request.body;

  const trx = await db.transaction();

  try {
    const insertedUsersIds = await trx('users').insert({
      name,
      avatar,
      whatsapp,
      bio,
    });

    const user_id = insertedUsersIds[0];

    const insertedClassesIds = await trx('classes').insert({
      subject,
      cost,
      user_id,
    });

    const class_id = insertedClassesIds[0];

    const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
      const { week_day, from, to } = scheduleItem;
      return {
        week_day,
        from: convertHourToMinutes(from),
        to: convertHourToMinutes(to),
        class_id,
      };
    });

    await trx('class_schedule').insert(classSchedule);

    await trx.commit();

    return response.status(201).json({
      message: 'Success',
    })
  } catch (error) {
    trx.rollback();

    return response.status(400).json({
      message: 'Unexpected error while creating new class',
      error,
    })
  }
}

export default {
  post,
}