// Sidebar.jsx

import React from 'react';
// import { Drawer, List, ListItem, ListItemText } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Mainheader from './Mainheader';

const Mainsidebar = () => {
    const navigate = useNavigate()
    const nav = () =>{
        navigate('/home')
    }
  return (
    <Drawer variant="permanent" anchor="left">
    <List>
      <ListItem onClick={nav} >
        <ListItemText primary="Home" />
      </ListItem>
    </List>
  </Drawer>
  );
};

export default Mainsidebar;
