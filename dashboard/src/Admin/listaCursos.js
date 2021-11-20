import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@mui/material/Button';
import Link from '@material-ui/core/Link';
import spinner from "../assets/spinner_icon.gif";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Escola Terapia. Todos os diretos resevados.
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
    backgroundColor:"#32647E"
  },
  toolbarIcon: {
    display: 'flex',
    backgroundColor: "white",
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  
 
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
 
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    alignItems:"center",
    justifyContent:"center",
    width: '100%',
    
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  logo: {
    width:120,
    marginRight: 15,
    marginBottom: 8
    
  }
}));

export default function ListaCursos({cursos}) {
  const classes = useStyles();
 
  

  return (
    <div className={classes.root}>
      <CssBaseline />
      
      
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container className={classes.container}>
       
            
           {!cursos.length ? (
             <div style={{
               display:"flex", 
               alignItems:"center",
               justifyContent:"center", 
               
               width:"100%"}}>
              <img src={spinner}  width="150" alt="Carregando..."/></div>
              ):(
           cursos.map(( cursos, key) =>(
             <div style={{alignItems: "center",display:"flex", justifyContent:"center"}} key={key}>
              
             <div style={{
               backgroundColor: "#f3f3f3", 
               margin: 10,
               width: "100%",
               height: "100%",
                             
               borderRadius: 20,
               boxShadow: "1px 1px 1px #ddd",
               }}>
                <div style={{flexDirection:"row", display:"flex", padding: 10}}>
                 <div style={{width: 145}}>
                     <img src={`upload/${cursos.imgCurso}`} alt="Imagem capa" width="130" height= "130" style={{borderRadius: 15,marginRight: 15}} /> </div>
                 <div style={{  width: "58%"}}>
                 <div style={{flexDirection:"row-reverse",display:"flex", fontWeight:"bold", color:"#31647D"}}>{cursos.tipoCurso}</div>
                    
                    <div><h2 style={{color:"#31647D", marginTop: -3}}>{cursos.tituloCurso}</h2></div>
                   
                   
                    <div><p style={{fontSize: 12}}>Data:<span style={{fontWeight:"bold", fontSize: 12}}> {cursos.data}<br/></span>
                     Horário:<span style={{fontWeight:"bold", fontSize: 12}}>{cursos.horario}</span></p></div>
                     <div style={{flexDirection:"row-reverse",display:"flex"}}>
                         <Button style={{width: 150, marginTop: 1, borderRadius:20, backgroundColor: "#8ED5BB", border: 0, color: "#fff"}} variant="outlined" type="submit" >Quero o curso</Button></div>
                  </div>
                  
                </div>
               
             </div>

             </div>
           )))}
        
          <Box pt={4}>
         
          </Box>
        </Container>
      </main>
    </div>
  );
}