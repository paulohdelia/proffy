import express from 'express';

const router = express.Router();

router.get('/hello-github', (request, response) => {
  return response.json({
    message: 'Hello Github!',
  })
})

export default router;