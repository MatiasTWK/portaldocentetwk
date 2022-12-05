const express = require ("express");
const asistenciaSchema = require  ("../models/asistencia");

const router = express.Router();

//Crear asistencia
router.post("/asistencias", (req, res) =>{
    const asistencia = asistenciaSchema(req.body);
    asistencia
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({}));
});

//obtener asistencia
router.get("/asistencias", (req, res) => {
    asistenciaSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});



//editar asistencia
router.put("/asistencias/:id", (req, res) => {
    const { id } = req.params;
    const { asistencia } = req.body;
    asistenciaSchema
        .updateOne({ _id: id },{ $set: { asistencia } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//eliminar asistencia
router.delete("/asistencias/:id", (req, res) => {
    const { id } = req.params;
    asistenciaSchema
        .remove({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});


module.exports = router;