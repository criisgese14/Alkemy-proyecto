const {Router} = require("express")
const axios = require("axios")
const router = Router()
const {Movements} = require('../db.js')

router.post('/', async (req, res) => {
    const {concept, amount, date, type} = req.body;
    await Movements.create({
        concept,
        amount,
        type,
        date
    })
    res.json("hola")
})

router.put("/", async (req, res) => {
    console.log(req.body)
    const changes = req.body;
    
    await Movements.update(changes, {
        where: {
            id: changes.id,
        }
    });
    res.json("cambios hechos")
})

router.delete("/:id", async (req, res) => {
    console.log(req.params)
    const {id} = req.params;
    await Movements.destroy({
        where: {
            id,
        }
    })
    res.json("eliminado")
})

module.exports = router;