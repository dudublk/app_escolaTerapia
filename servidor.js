const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const app = express();
app.use(express.json());
//const port = process.env.PORT || 2121;
app.use((req, res, next) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-type, X-PINGOTHER, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);

    app.use(cors());
    next();
});




const uri = process.env.ATLAS_URI;
const connection = mongoose.connection;
connection.once("open", () => console.log("MongoDB conectado"));

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const rotaUser = require('./src/routes/rUsers');
app.use("/usuarios", rotaUser);

const rotaCursos = require('./src/routes/rCursos');
app.use("/cursos", rotaCursos);

// RODANDO O SERVIDOR
app.listen(process.env.PORT || 3000, function(){
 console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});



