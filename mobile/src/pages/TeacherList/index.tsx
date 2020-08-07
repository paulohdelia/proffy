import React, { useState } from 'react';

import { View, ScrollView, Text, TextInput } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage'

import api from '../../services/api';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import styles from './styles';
const {
  container,
  teacherList,
  searchForm,
  label,
  input,
  inputGroup,
  inputBlock,
  submitButton,
  submitButtonText,
} = styles

function TeacherList() {
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const [teachers, setTeachers] = useState([]);
  const [favorites, setFavorites] = useState<number[]>([]);

  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  function loadFavorites() {
    AsyncStorage.getItem('favorites').then((response) => {
      if (response) {
        const favoritedTeachers = JSON.parse(response);
        const favoritedTeacherIds = favoritedTeachers.map((teacher: Teacher) => {
          return teacher.id;
        })

        setFavorites(favoritedTeacherIds);
      }
    });
  }


  function handleToggleFiltersVisible() {
    setIsFilterVisible(!isFilterVisible);
  }

  const week_days = [
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado',
  ];

  async function handleFiltersSubmit() {
    loadFavorites();

    const response = await api.get('classes', {
      params: {
        subject,
        week_day: week_days.indexOf(week_day),
        time
      }
    });

    setIsFilterVisible(false);
    setTeachers(response.data);
  }

  return (
    <View style={container}>
      <PageHeader title="Proffys disponíveis" headerRight={(
        <BorderlessButton onPress={handleToggleFiltersVisible}>
          <Feather name="filter" size={20} color="#FFF" />
        </BorderlessButton>
      )}>
        {isFilterVisible && (
          <View style={searchForm}>
            <Text style={label}>Matéria</Text>
            <TextInput
              style={input}
              placeholder="Qual matéria?"
              placeholderTextColor="#C1BCCC"
              value={subject}
              onChangeText={(text) => setSubject(text)}
            />

            <View style={inputGroup}>
              <View style={inputBlock}>
                <Text style={label}>Dia da semana</Text>
                <TextInput
                  style={input}
                  placeholder="Qual dia?"
                  placeholderTextColor="#C1BCCC"
                  value={week_day}
                  onChangeText={(text) => setWeekDay(text)}
                />
              </View>
              <View style={inputBlock}>
                <Text style={label}>Horário</Text>
                <TextInput
                  style={input}
                  placeholder="Que horas?"
                  placeholderTextColor="#C1BCCC"
                  value={time}
                  onChangeText={(text) => setTime(text)}
                />
              </View>
            </View>

            <RectButton style={submitButton} onPress={handleFiltersSubmit}>
              <Text style={submitButtonText}>Filtrar</Text>
            </RectButton>

          </View>
        )}
      </PageHeader>
      <ScrollView
        style={teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {teachers.map((teacher: Teacher) => {
          return (
            <TeacherItem
              key={teacher.id}
              teacher={teacher}
              favorited={favorites.includes(teacher.id)}
            />
          )
        }
        )}
      </ScrollView>
    </View>
  );
}

export default TeacherList;