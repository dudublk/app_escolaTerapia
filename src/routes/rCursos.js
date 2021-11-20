const express = require("express");
const router = express.Router();
const CadCursos = require('../models/addCursos');
const multer = require('multer');
const CadUser = require("../models/addUser");


//
const storage = multer.diskStorage({
    destination: (req, res, callback) => {
        callback(null, "./dashboard/public/upload/");

    },
    filename: (req, file, callback) => {
        callback(null, file.originalname);
    }
})
const upload = multer({storage: storage});

// LISTA TODOS OS CURSOS
router.get('/', (req, res) =>{
    CadCursos.find()
    .then(cursos => res.json(cursos))
    .catch(err => res.status(400).json(`Erro:${err}`))
});

// ADD UM NOVO CURSO
router.post('/cadastrar', upload.single("imgCurso"), (req, res) =>{
    const newCurso = new CadCursos({
        tituloCurso: req.body.tituloCurso,
        descricacao: req.body.descricacao,
        tipoCurso:  req.body.tipoCurso,
        data: req.body.data,
        horario: req.body.horario,
        imgCurso: req.file.originalname
        
    })
    newCurso.save()
    .then(() => res.json("Curso cadastrado com sucesso!"))
    .catch(err => res.status(400).json(`Erro: ${err}`));
});


// ENCONTRAR CURSO POR ID
router.get('/:id', (req, res) => {
    CadCursos.findById(req.params.id)
    .then(cursos => res.json(cursos))
    .catch(err => res.status(400).json(`Erro: ${err}`))
})


// ENCONTRAR CURSO POR ID E ATUALIZAR
router.put('/update/:id', upload.single("imgCurso"), (req, res) =>{
    CadCursos.findById(req.params.id)
    .then(cursos => {
        cursos.tituloCurso = req.body.tituloCurso;
        cursos.descricacao =  req.body.descricacao;
        cursos.tipoCurso =  req.body.tipoCurso;
        cursos.data = req.body.data;
        cursos.horario = req.body.horario;
        cursos.imgCurso = req.file.originalname;

        cursos
            .save()
            .then(() => res.json("Curso atualizado com sucesso!!"))
            .catch(err => res.status(400).json(`Erro: ${err}`))
    })
    .catch(err => res.status(400).json(`Erro: ${err}`))
})

// ENCONTRAR CURSO POR ID E DELETAR
router.delete('/:id', (req, res) =>{
    CadCursos.findByIdAndDelete(req.params.id)
    .then(() => res.json("Curso deletado com sucesso"))
    .catch(err => res.status(400).json(`Erro: ${err}`))
})

module.exports =  router;