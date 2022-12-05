const express = require ("express");
const userSchema = require ("../models/usuarios");
const userController = require("../controllers/userController");
const router = express.Router();

//Crear usuarios
router.post("/usuarios", (req, res) => {
    const user = userSchema(req.body);
    user
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({}));
});

//Obtener usuarios
router.get("/usuarios", (req, res) => {

    userSchema
            .find()
            .then((data) => {res.json(data);})
            .catch((error) => error);
});

//Obtener usuarios
router.get("/users", (req, res) => {
    userController.getUsers(req, res);
});

//Obtener usuario por rut
router.get("/user/", (req, res) => {
    userController.getUserByRut(req, res);
});



//Obtener usuarios por id
router.get("/usuarios/:id", (req, res) => {
    const {} = req.params;
    userSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//editar usuarios
router.put("/usuarios/:id", (req, res) => {
    const { id } = req.params;
    const { rut, password } = req.body;
    userSchema
        .updateOne({ _id: id },{ $set: { rut, password } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));        
});

//eliminar usuarios
router.delete("/usuarios/:id", (req, res) => {
    const { id } = req.params;
    userSchema
        .remove({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});


module.exports = router;