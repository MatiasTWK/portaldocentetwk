const studentService = require("../services/studentService");

const getStudents = async (req, res) => {
    const students = await studentService.getStudents(req, res);
    console.log(students)
    res.send(students);
};

module.exports = {
    getStudents
}