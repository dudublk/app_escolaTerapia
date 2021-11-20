import React, {useEffect, useState} from "react";
import {
    Routes,Route,
  } from "react-router-dom";
import CadastroCurso from "./Admin/CadastroCurso";
import ClintForms from "./Admin/ClientForms";
import EditarCursos from "./Admin/EditarCursos";
import Dashboard from "./Admin/Index";
import ListCursos from "./Admin/ListCursos";
import axios from 'axios'

import App from "./App";

import ListaCursos from "./Admin/listaCursos";



export default function Routerspage() {
  const[cursos,setCursos] = useState([])
  useEffect(() =>{
    axios.get('/cursos')
    .then(res => setCursos(res.data))
    .catch(error => console.log(error));
  });

    return(
        
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/dashboard" element={<Dashboard cursos={cursos}/>} />
            <Route path="/dashboard/cursos" element={<ListCursos />} />
            <Route path="/dashboard/cursos/cadastrocursos" element={<CadastroCurso cursos={cursos}/>} />
            <Route path="/dashboard/cursos/editarcursos" element={<EditarCursos/>} />
            <Route path="/dashboard/listagemform" element={<ClintForms/>} />
            <Route path="/listacursos" element={<ListaCursos cursos={cursos}/>} />
       
      </Routes>
    )
}