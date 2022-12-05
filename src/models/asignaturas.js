const mongoose = require("mongoose");

const asignaturaSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        unique: true
    },
    notas:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'notas',
            autopopulate: true,
        },
    ],
    asistencia:[
        {
        type:mongoose.Schema.Types.ObjectId,
        ref:'asistencia',
        autopopulate: true,
        }
]
});

asignaturaSchema.plugin(require('mongoose-autopopulate'));
module.exports = mongoose.model('asignaturas', asignaturaSchema);