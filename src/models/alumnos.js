const mongoose = require("mongoose");


const alumnosSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        unique: true
    },
    nlista: {
        type:String,
        required: true,
    },
    asignaturas:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'asignaturas',
            autopopulate: true,
        },
    ]
});



module.exports = mongoose.model('Alumno', alumnosSchema);


