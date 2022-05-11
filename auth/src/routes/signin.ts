import express from 'express';

const router = express.Router();

router.post('/api/users/siginin', (req, res) => {
  res.send('Hi there!');
});

export { router as signinRouter };