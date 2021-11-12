const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Formulario = new Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
},
{
    timestamps: true,
});

mongoose.model('formulario', Formulario);