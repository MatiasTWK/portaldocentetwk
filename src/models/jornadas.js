const mongoose = require("mongoose");

const journyesSchema = mongoose.Schema({
    nombre:{
        type: String,
        require: true
    },
    asignaturas:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'asignaturas',
            autopopulate: true,
        },
    ]
});


module.exports = mongoose.model ('journey', journyesSchema);