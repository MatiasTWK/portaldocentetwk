const userSchema = require("../models/usuarios");


const getUsers = async (req, res) => {
   return await userSchema.find();
};


const getUserByRut = async (userRut) => {
    return await userSchema.findOne({rut:userRut});
};




module.exports = {
    getUsers,
    getUserByRut
};