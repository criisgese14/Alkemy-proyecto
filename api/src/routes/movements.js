const { Router } = require("express");
const router = Router();
const {Movements} = require('../db.js')

router.get('/', async (req, res) => {  
    const allMovements = await Movements.findAll({
        order: [['id', "DESC"]],
    })
    res.json(allMovements);
})


module.exports = router