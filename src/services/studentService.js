const alumnosSchema = require("../models/alumnos");



const getStudents = async (req, res) => {
    return await alumnosSchema.find();
};
 
 
 
 
module.exports = {
    getStudents
};
