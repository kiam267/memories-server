const express = require('express');
const {
  signin,
  signup,
} = require('../controllers/user-controller');

const router = express.Router();

router.post('/', signin);
router.post('/signup', signup);

module.exports = router;
