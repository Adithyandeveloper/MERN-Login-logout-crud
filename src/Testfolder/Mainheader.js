    // Header.jsx

    import React from 'react';
    import MuiAppBar from '@mui/material/AppBar';
    import { styled, useTheme, } from '@mui/material/styles';
    import Toolbar from '@mui/material/Toolbar';
    import Typography from '@mui/material/Typography';
    const drawerWidth = 240;
    const Mainheader = () => {
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
        
    return (
        <AppBar position="fixed">
        <Toolbar>
            <Typography variant="h6" noWrap>
            Centered Header
            </Typography>
        </Toolbar>
        </AppBar>
    );
    };

    export default Mainheader;
