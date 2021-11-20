const mongoose  = require('mongoose')
const Schema    = mongoose.Schema;

const addCursos = new Schema({
    tituloCurso: {type: String, required: true},
    descricacao: {type: String, required: true},
    tipoCurso: {type: String, required: true},
    data: {type: String, required: true},
    horario: {type: String, required: true},
    imgCurso: {type: String, required: true},
    
},{
    timestamps: true
})

const CadCursos = mongoose.model("CadCursos", addCursos);
module.exports = CadCursos;