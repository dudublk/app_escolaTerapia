import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { mainListItems, secondaryListItems } from './components/menuAdmin';
import Logo from "../assets/logo.png"

import axios from 'axios';
//import FormControlLabel from '@mui/material/FormControlLabel';
//import Checkbox from '@mui/material/Checkbox';

import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';



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

const drawerWidth = 240;

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
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
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
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
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
    width: "90%",
    alignItems:"center"
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


const Input = styled('input')({
    display: 'none',
  });
export default function CadastroCurso({cursos}) {

  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
 
  //CONST FORMULARIO
  const [tituloCurso, setTituloCurso] = useState('');
  const [descricacao, setDescricacao] = useState('');
  const [data, setDataCurso] = useState('');
  const [horario, setHorario] = useState('');
  const [tipoCurso, setTipoCurso] = useState('');
  const [imgCurso, setImgCurso] = useState('');

  const btnImg = e => {
    setImgCurso(e.target.files[0]);
  }
  const btnCadastar = e => { 
    e.preventDefault();

    const formData = new FormData();
    formData.append("tituloCurso", tituloCurso);
    formData.append("descricacao", descricacao);
    formData.append("data", data);
    formData.append("horario", horario);
    formData.append("tipoCurso", tipoCurso);
    formData.append("imgCurso", imgCurso);

    


    setTituloCurso("")
    setDescricacao("")
    setDataCurso("")
    setHorario("")
    setTipoCurso("");
    axios.post("/cursos/cadastrar", formData)
    .then(res => console.log(res.data))
    .catch(err => {
      console.log(err);
    })
  }
  //FIM CONST FORMULARIO


  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Dashboard
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
        <img src={Logo} className={classes.logo} alt="logo"/>
          <IconButton onClick={handleDrawerClose}>
            
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
        <Divider />
        <List>{secondaryListItems}</List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
          

          <React.Fragment>
            <div style={{width:600, flexDirection: 'column', display:"block", justifyContent: "center", alignItems:"center"}}>
            <div style={{alignItems: "center"}}>
      <Typography variant="h6" gutterBottom>
        Cadastro de Cursos
      </Typography>
        </div>
     

     
        <form onSubmit={btnCadastar} encType="multipart/form-data">
        <div style={{display: "flex", flexDirection: "column", marginBottom: 20, marginTop: 20}}>
        <div> Nome do curso:</div>
      <label>
        <input style={{
          width: 500, height: 40,
          borderWidth: .1,borderRadius: 10, 
          borderColor: "#f3f3f3"}} 
          onChange={e => setTituloCurso(e.target.value)} 
          type="text" 
          name="tituloCurso"
          value={tituloCurso} />
      </label>

      
      </div> 

      <div> 
        <div> Descrição:</div>
        <label >
          <textarea  style={{width: 500, height: 150}} 
          type="textarea" 
          name="descricacao" 
          onChange={e => setDescricacao(e.target.value)}
          value={descricacao} />
        </label>
      </div>


      <div style={{display: "flex", flexDirection: "row", marginBottom: 20, marginTop: 20, borderRadius: 5}}>
          <div>
                <div> Data do curso:</div>
            <label>
              <input style={{width: 200, height: 40, borderRadius: 5, marginRight: 15}}
                    type="text" name="Data" 
                    onChange={e => 
                    setDataCurso(e.target.value)}
                    value={data} />
            </label>
        </div>
        <div>
                <div> Horário:</div>
            <label>
              <input style={{width: 200, height: 40, borderRadius: 5, marginRight: 15}}
                    type="text" name="horario" 
                    onChange={e => 
                    setHorario(e.target.value)}
                    value={horario} />
            </label>
        </div>
      <div>
          <div> Formato do curso:</div>
          <label>
            <input style={{
              width: 200, height: 40, 
              borderRadius: 5}} 
              type="text" 
              name="tipoCurso" 
              onChange={e => setTipoCurso(e.target.value)} 
              placeholder="Online / Presencial"
              value={tipoCurso}
              />
          </label>
      </div>
      </div> 
       
              <div style={{width: 600, marginTop: 30}}>
              <div style={{display: 
                'flex',flexDirection:'row',}}>
              <label><div style={{height: 30}}>Selecione a imagem do curso </div>
             
            <Input type="file" name="image" filename="imgCurso" onChange={btnImg} />
            <Button variant="contained" component="span" >
              Selecionar
            </Button>
           
            
            </label>
            <div style={{marginLeft: 50}}>
         
           
           <img alt="Previa da imagem selecionada" width="100" height="100"/> 
           <img alt="Previa da imagem selecionada" width="100" height="100"/>
            
            </div>
            </div>
         
            <div style={{width: 350, height: 150, justifyContent: "center", alignItems:"center", paddingTop:40}}>
            <Button style={{width: 500, marginTop: 30}} variant="outlined" type="submit" >Cadastar curso</Button>
            </div>
            </div>
            </form>

       
       
        
       
    </div>
    </React.Fragment>


          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}