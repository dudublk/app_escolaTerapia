const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Cursos = new Schema({
    nomeCurso: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    }
},
{
    timestamps: true,
});

mongoose.model('cursos', Cursos);