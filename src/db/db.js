'use strict';
const mongoose = require('mongoose');




//CONECTANDO AO DB
mongoose.connect('mongodb+srv://dudusagitt:sagitt039746@cluster0.v7beo.mongodb.net/dbEscolaTerapia?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() =>{
    console.log("Conexão com mongoDB realizada com sucesso!3");
}).catch((erro) => {
    console.log("A conexão não foi realizada");
});