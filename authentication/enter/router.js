const { enter,exit } = require('./controller');

const router = require('express').Router();

router.post("/", enter);
router.get("/exit", exit);

module.exports = router;