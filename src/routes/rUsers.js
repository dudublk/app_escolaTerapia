const express = require("express");
const router2 = express.Router();
const multer = require('multer');
const CadUser = require("../models/addUser");

// LISTA TODOS OS CURSOS
router2.get('/', (req, res) =>{
    CadUser.find()
    .then(usuarios => res.json(usuarios))
    .catch(err => res.status(400).json(`Erro:${err}`))
});

//ADD USER

router2.post('/addusuario', (req, res) =>{
    const newUser = new CadUser({
        nomeUser:  req.body.nomeUser,
        emailUser: req.body.emailUser,
        senhaUser: req.body.senhaUser
        
    })
    newUser.save()
    .then(() => res.json("Usuário cadastrado com sucesso!"))
    .catch(err => res.status(400).json(`Erro: ${err}`));
});

module.exports =  router2;