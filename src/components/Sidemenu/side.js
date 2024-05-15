import React, { useContext, useEffect } from 'react';
import { styled, useTheme, } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Home, Outlet } from '@mui/icons-material';
import Homes from '../pages/Home';
import { useNavigate } from 'react-router-dom';
import Channel from '../pages/Channel';
import { Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import { myContext } from '../../store/createcontext';
const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));




export default function Sidenav() {
  const {change} = useContext(myContext)
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const [hideNav, setHidenav] = React.useState(0);
  const navigate = useNavigate();

  const navHomepage = () => {
    // navigate('/home')
    setHidenav(0)
  }

  const navChanellPage = () => {
    // navigate('/channel');
    setHidenav(1)
  }
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  useEffect(() => {
    setOpenSnackbar(false);
  }, [])

const logoutHandler = () =>{
  console.log("Logout Clicked")
  sessionStorage.clear();
  change('false')
}

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar sx={{ backgroundColor: '#b5864d;' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => setOpen(!open)}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Button variant="outlined" style={{ position: 'relative', left: '89%', color: 'white', background: 'black' }} onClick={logoutHandler}>Logout</Button>
          {/* <p>Logout</p> */}
        </Toolbar>

        <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={handleSnackbarClose}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <MuiAlert
            elevation={6}
            variant="filled"
            onClose={handleSnackbarClose}
            severity="success"
          >
            Registration successful!
          </MuiAlert>
        </Snackbar>


      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader sx={{ background: '#b5864d' }}>
          <IconButton onClick={() => setOpen(!open)}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>






        </List>
        <Divider />
        <List >

          <ListItem disablePadding onClick={() => navHomepage()}>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary='Home' />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding onClick={() => navChanellPage()}>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary='Channel' />
            </ListItemButton>
          </ListItem>

        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />

        {hideNav == 0 && <Homes></Homes>}
        {hideNav == 1 && <Channel></Channel>}




      </Main>
    </Box>
  );
}
