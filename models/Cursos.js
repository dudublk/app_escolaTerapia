const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Cursos = new Schema({
    nomeCurso: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: false
    },
    image: {
        type: String,
        require: false
    }

},
{
    timestamps: true,
});

//mongoose.model('cursos', Cursos);
module.exports = mongoose.model("cursos", Cursos)