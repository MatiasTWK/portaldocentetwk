const mongoose = require("mongoose");

const asistenciaSchema = mongoose.Schema({
    asistencia: {
        type: Date,
        required: true,
        unique: true
    },

});

module.exports = mongoose.model('asistencia', asistenciaSchema );