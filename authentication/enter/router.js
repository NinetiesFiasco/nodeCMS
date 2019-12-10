const { enter } = require('./controller');

const router = require('express').Router();

router.post("/",enter);

module.exports = router;