import React from 'react';
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

import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { mainListItems, secondaryListItems } from './components/menuAdmin';
import Logo from "../assets/logo.png"
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
    alignItems:"center",
    justifyContent:"center",
    width: '80%',
    
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

export default function Dashboard({cursos}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
 

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
        <img src={Logo} className={classes.logo} alt="Logo"/>
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
        <div style={{alignItems:"center", justifyContent:"center", display:"flex"}}><h1>Lista de cursos ativos</h1></div>
            
           {!cursos.length ? (
             <div style={{
               display:"flex",height:280, 
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
               width: 750,
               justifyContent:"center",
               alignItems:"center",
               borderRadius: 20,
               boxShadow: "1px 1px 1px #ddd",
               }}>
                <div style={{flexDirection:"row", display:"flex", alignItems:"center", padding: 10}}>
                 <div>  <img src={`upload/${cursos.imgCurso}`} alt="Imagem capa" width="182" style={{borderRadius: 15,marginTop: 8 ,marginRight: 15}} /> </div>
                 <div style={{  width: "71%"}}>
                    <div style={{flexDirection:"row-reverse",display:"flex", fontWeight:"bold", color:"#31647D"}}>{cursos.tipoCurso}</div>
                    
                    <div><h2 style={{color:"#31647D", marginTop: -15}}>{cursos.tituloCurso}</h2></div>
                    
                    <div><p>{cursos.descricacao}</p></div>
                    <div><p>Data:<span style={{fontWeight:"bold"}}> {cursos.data}</span></p></div>
                    <div><p>Horário:<span style={{fontWeight:"bold"}}> {cursos.horario}</span></p></div>

                  </div>
                </div>
             
             </div>

             </div>
           )))}
        
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}