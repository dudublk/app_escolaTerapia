const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require("./models/Cursos");
require("./models/Formulario");

const Cursos = mongoose.model('cursos');
const Formulario = mongoose.model('formulario');

const app = express();
app.use(express.json());

app.use((req, res, next) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    app.use(cors());
    next();
})

//CONECTANDO AO DB
mongoose.connect('mongodb+srv://dudusagitt:sagitt039746@cluster0.v7beo.mongodb.net/dbEscolaTerapia?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() =>{
    console.log("Conexão com mongoDB realizada com sucesso!");
}).catch((erro) => {
    console.log("A conexão não foi realizada");
});


// LISTAR CURSOS CADASTRADOS
app.get('/cursos', (req, res, next) => {

  Cursos.find({}).then((cursos) =>{
        return res.json(cursos);
    }).catch((erro) =>{
        return res.status(400).json({
            error: true,
            message: "Nenhum curso encontrado!"
        })
    })
});

// VISUALIZAR
app.get("/cursos/:id", (req, res,) => {
  
    Cursos.findOne({_id: req.params.id}).then((cursos) =>{
        return res.json(cursos);
    }).catch((erro) =>{
        return res.status(400).json({
            error: true,
            message: "Nenhum curso encontrato!"
        });
    });
    
});



// CADASTRANDO UM CURSO
app.post("/cursos", (req, res) => {
   const cursos = Cursos.create(req.body, (err) =>{
       if(err) return res.status(400).json({
           error: true,
           message: "Erro durante o cadastramento do curso!"
       })

       return res.status(200).json({
        error: false,
        message: "Curso cadastrado com sucesso!"
    })
       
   })
});

// ATUALIZAR 

app.put("/cursos/:id", (req, res) => {
    const cursos = Cursos.updateOne({ _id: req.params.id}, req.body, (erro) => {
        if(erro) return res.status(400).json({
            error: true,
            message: "Erro ao editar"
        });
        return res.json({
            error: false,
            message: "Curso editado com sucesso!"
        });
    });
});

app.delete("/cursos/:id", (req, res) => {
    const cursos = Cursos.deleteOne({ _id: req.params.id}, (erro) =>{
        if(erro) return res.status(400).json({
            error: true,
            message: "Erro ao deletar o curso!"
        });
        return res.json({
            error: false,
            message: "Curso deletado com sucesso!"
        });
    });
});

/// FORMULARIO

// LISTAR CURSOS CADASTRADOS
app.get("/formulario", (req, res) => {

    Formulario.find({}).then((formulario) =>{
        return res.json(formulario);
    }).catch((erro) =>{
        return res.status(400).json({
            error: true,
            message: "Nenhum cadastro encontrado!"
        })
    })
});

// VISUALIZAR
app.get("/formulario/:id", (req, res,) => {
  
    Formulario.findOne({_id: req.params.id}).then((formulario) =>{
        return res.json(formulario);
    }).catch((erro) =>{
        return res.status(400).json({
            error: true,
            message: "Nenhum cadastro encontrato!"
        });
    });
    
});



// CRIAR CADASTRO FORMULARIO
app.post("/formulario", (req, res) => {
   const formulario = Formulario.create(req.body, (err) =>{
       if(err) return res.status(400).json({
           error: true,
           message: "Erro durante o cadastramento no Formulario!"
       })

       return res.status(200).json({
        error: false,
        message: "Cadastro realizado com sucesso!"
    })
       
   })
});

// ATUALIZAR FORMULARIO

app.put("/formulario/:id", (req, res) => {
    Formulario.updateOne({ _id: req.params.id}, req.body, (erro) => {
        if(erro) return res.status(400).json({
            error: true,
            message: "Erro ao editar"
        });
        return res.json({
            error: false,
            message: "Cadastro editado com sucesso!"
        });
    });
});

app.delete("/formulario/:id", (req, res) => {
    const formulario = Formulario.deleteOne({ _id: req.params.id}, (erro) =>{
        if(erro) return res.status(400).json({
            error: true,
            message: "Erro ao deletar o cadastro!"
        });
        return res.json({
            error: false,
            message: "Cadastro deletado com sucesso!"
        });
    });
});






// RODANDO O SERVIDOR
app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });