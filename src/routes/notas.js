const express = require ("express");
const notaSchema = require  ("../models/notas");

const router = express.Router();

//Crear nota
router.post("/notas", (req, res) =>{
    const nota = notaSchema(req.body);
    nota
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});

//obtener nota
router.get("/notas", (req, res) => {
    notaSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//editar nota
router.put("/notas/:id", (req, res) => {
    const { id } = req.params;
    const { nota } = req.body;
    notaSchema
        .updateOne({ _id: id },{ $set: { nota } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//eliminar nota
router.delete("/notas/:id", (req, res) => {
    const { id } = req.params;
    notaSchema
        .remove({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});


module.exports = router;