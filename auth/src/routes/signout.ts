import express from 'express';

const = express.Router();

router.post('/api/users/signout', (req, res) => {
  res.send('Hi there!');
});

export { router as signoutRouter };