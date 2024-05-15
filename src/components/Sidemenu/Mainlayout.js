import React from 'react'
import { Outlet } from 'react-router-dom';
import { styled, useTheme } from '@mui/material/styles';
import {
    AppBar,
    Box,
    CssBaseline,
    Toolbar,
    useMediaQuery,
  } from '@mui/material';
import MenuAppBar from './Header';
import Sidemenu from './sidemenu';
import {drawerWidth} from '../../store/constant'
const Mainlayout = () => {
  const theme = useTheme();
  
    const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
        ({ theme, open }) => ({
          ...theme.typography.mainContent,
          ...(!open && {
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            transition: theme.transitions.create('margin', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
            [theme.breakpoints.up('md')]: {
              // original
              // marginLeft: -(drawerWidth - 20),
              // My Implementation
              marginLeft: -(drawerWidth - 65),
              // My Implementation
              width: `calc(100% - ${drawerWidth}px)`,
              padding: '10px'
            },
            [theme.breakpoints.down('md')]: {
              // marginLeft: '20px',
              width: `calc(100% - ${drawerWidth}px)`,
              padding: '8px',
            },
            [theme.breakpoints.down('sm')]: {
              marginLeft: '10px',
              width: `calc(100% - ${drawerWidth}px)`,
              padding: '8px',
              marginRight: '10px',
            },
          }),
          ...(open && {
            transition: theme.transitions.create('margin', {
              easing: theme.transitions.easing.easeOut,
              duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            padding: '10px',
            width: `calc(100% - ${drawerWidth}px)`,
            [theme.breakpoints.down('md')]: {
              marginLeft: '20px',
              padding: '8px',
            },
            [theme.breakpoints.down('sm')]: {
              marginLeft: '10px',
              padding: '8px',
            },
          }),
        })
      );
  return (
    <Box>
       <AppBar>
       </AppBar>
<Sidemenu></Sidemenu>

<Main theme={theme}sx={{marginTop: '79px'}}>
        {/* breadcrumb */}
        {/* <Breadcrumbs
          separator={IconChevronRight}
          navigation={NavMenu}
          icon
          title
          rightAlign
        /> */}
        <Outlet />
      </Main>
    </Box>
  )
}

export default Mainlayout