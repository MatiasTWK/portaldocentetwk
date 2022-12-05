const express = require ("express");
const subjectSchema = require ("../models/ramos");

const router = express.Router();

//crear ramo
router.post("/ramos", (req, res) => {
    const subject = subjectSchema(req.body);
    subject
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json());
});

//obtener ramo
router.get("/ramos", (req, res) => {
    subjectSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//editar jornada
router.get("/ramos/:id", (req, res) => {
    const { id } = req.params;
    const { nombre, docente } = req.body;
    subjectSchema
        .updateOne({ _id: id },{ $set: { nombre, docente } })
        .then((data) => res.json(data))
        .catch((data) => res.json({ message: error }));
});

router.delete("/ramos/:id", (req, res) => {
    const { id } = req.params;
    subjectSchema
        .remove({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;