const express = require ("express");
const journyesSchema = require  ("../models/jornadas");

const router = express.Router();

//Crear jornada
router.post("/jornadas", (req, res) =>{
    const journey = journyesSchema(req.body);
    journey
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({}));
});

//obtener jornada
router.get("/jornadas", (req, res) => {
    journyesSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//editar jornada
router.put("/jornadas/:id", (req, res) => {
    const { id } = req.params;
    const { nombre } = req.body;
    journyesSchema
        .updateOne({ _id: id },{ $set: { nombre } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//eliminar jornada
router.delete("/jornadas/:id", (req, res) => {
    const { id } = req.params;
    journyesSchema
        .remove({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});


module.exports = router;