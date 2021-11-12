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
    },
    endereco: {
        type: String,
        required: true
    },
    bairro: {
        type: String,
        required: true
    },
    cidade: {
        type: String,
        required: true
    },
    cep: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: true
    },
    rg: {
        type: String,
        required: true
    },
    data: {
        type: String,
        
    },
    telefone: {
        type: String,
        required: true
    },
    key: {
        type: String,
        required: true
    }
},
{
    timestamps: true,
});

mongoose.model('formulario', Formulario);