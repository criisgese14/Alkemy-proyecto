const { Router } = require("express");
const router = Router();
const movement = require("./movement.js")
const movements = require("./movements.js")

router.use('/movements', movements)
router.use('/movement', movement)

module.exports = router