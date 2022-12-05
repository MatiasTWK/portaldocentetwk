const express = require ("express");
const alumnosSchema = require ("../models/alumnos");
const studentController = require("../controllers/studentController");

const router = express.Router();

//Crear alumno
router.post("/alumnos", (req, res) =>{
    const alumno = alumnosSchema(req.body);
    alumno
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//obtener alumno
router.get("/students", (req, res) => {
    studentController.getStudents(req, res);
});

//editar alumno
router.put("/alumnos/:id", (req, res) => {
    const { id } = req.params;
    const { asignaturas } = req.body;


    alumnosSchema
        .updateOne({ _id: id },{ $set: { asignaturas } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//eliminar alumno
router.delete("/alumnos/:id", (req, res) => {
    const { id } = req.params;
    alumnosSchema
        .remove({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//ver alumnos por id
router.get('/alumnos/:id', (req, res) => {
    const { id } = req.params;
    alumnosSchema
        .findById(id)
        .then((dato) => res.json(dato))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;