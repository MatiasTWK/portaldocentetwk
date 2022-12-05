const userService = require("../services/userService");

const getUsers = async (req, res) => {
    const users = await userService.getUsers(req, res);
    console.log(users)
    res.send(users);
};

const getUserByRut = async (req, res) => {
    const { rut } = req.body;
    const user = await userService.getUserByRut(rut);
    res.send(user);
};

module.exports = {
    getUsers,
    getUserByRut
};