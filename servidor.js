const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const app = express();
//const port = process.env.PORT || 2121;

app.use(cors());
app.use(express.json());

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



