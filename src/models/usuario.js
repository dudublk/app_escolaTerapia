const mongoose = require('mongoose');

const Usuario = mongoose.model('Usuario', {

    nomeUser: String,
    emailUser: String,
    senhaUser : String,

});

module.exports = Usuario;