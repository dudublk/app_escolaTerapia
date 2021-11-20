import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import LogoutIcon from '@material-ui/icons/ExitToApp';

export const mainListItems = (
  <div>
    <ListItem button component ="a" href="/dashboard" >
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button component ="a" href="/dashboard/cursos/cadastrocursos">
      <ListItemIcon>
      <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Cadastrar Curso" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Editar Cursos" />
    </ListItem>
    <ListItem button component ="a" href="/dashboard/listagemform">
      <ListItemIcon>
      <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Lista de Interessados" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="DRO" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Opções</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <LogoutIcon />
      </ListItemIcon>
      <ListItemText primary="Sair" />
    </ListItem>
   
  </div>
);