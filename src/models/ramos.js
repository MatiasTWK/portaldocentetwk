const mongoose = require("mongoose");

const subjectSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    docente: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('subject', subjectSchema);