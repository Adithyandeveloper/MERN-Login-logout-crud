import React, { useContext, useEffect, useState } from 'react';
import '../Auth/login.css';
import { styled } from '@mui/material/styles';
import profile from '../Assets/close-up-male-hands-using-laptop-home.jpg';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom'
import {
  Box,
  Divider,
  Grid,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
  useMediaQuery,
  TextField,
  MenuItem,
  Paper,
  Snackbar
} from '@mui/material';
import { autnservice } from '../service/authservice';
import { myContext } from '../store/createcontext';
import MuiAlert from '@mui/material/Alert';

const Login = () => {

  useEffect(() => {

  }, [])


  const navigate = useNavigate()
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };
  const { loginApi } = autnservice()
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    margin: 'auto',
    color: theme.palette.text.secondary,
    minHeight: '70vh',
    minWidth: '700px',
    marginTop: '40px',
    textAlign: 'center', // Correct the spelling here
  }));


  const paperStyle = {
    minHeight: '70vh',
    width: 750,
    margin: 'auto',
    marginTop: '80px',
    textAlign: 'center', // Fix the spelling here
  };

  const AuthContainer = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.primary.light,

  }));


  const login = {

  }
  const INITIAL_CREDENTIALS = {
    name: '',
    password: '',
  };


  const { setUserIn, change } = useContext(myContext);

  const [credentials, setCredentials] = useState(INITIAL_CREDENTIALS);

  const handleCredentialChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const loginSubmit = () => {
    console.log(credentials, "Loginform");

    // change(true);
    // navigate('/');
    loginApi(credentials).then((res) => {
      if (res?.data?.success) {
        change('true');
        setUserIn('true');
        navigate('/');
        sessionStorage.setItem('sessionID', res?.data?.sessionID)
      }
      else {
        setOpenSnackbar(true);
      }
    }, error => {
      setOpenSnackbar(true);
    })

    // loginsr(credentials).then((res)=>{
    //    if(res['data'] =='Login Successfull'){
    //        console.log(res,"response")
    //        setUserIn(true)

    //    }else {
    //     console.log(res,"else response")
    //    }
    // })
  }

  return (

    //  <Paper elevation={2} style={paperStyle}>
    //       <Grid sx={{textAlign:'center',height:'400px',}} >
    //           <h4 style={{ marginTop:'80px' , height:'500px'}}> Login </h4>

    //       </Grid>
    //  </Paper>
    <>
      {/* <div className='div1'>
      <h5 className='child1'>Right</h5>
      <h5 className='child2'>Left</h5>
      <h5 className='child3'>Center</h5>
      <h5 className='child4'>Bottom Left</h5>
      <h5 className='child'>Left</h5>
      <h5 className='child5'>Bottom Right</h5>
    </div>
                           
      <div className='div2'>
   <ul className='d'>
    <li>Home</li>
    <li>menu</li>
    <li>column</li>
    <li>row</li>

   </ul>

<p>xs  - Xtra small , sm - small ,md - medium ,lg - large</p>
<Grid container  >


                      
  <Grid item style={{background:'red'}} xs={4} sm={9} md={8} lg={12}>
  
  </Grid>
  <Grid item xs={8} sm={3} md={4} lg={12}>Dev
  <Divider orientation='vertical' flexItem/>
  </Grid>




</Grid>

      </div> */}

      <div >
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
            severity="error"
          >
            Login UnSuccessfull
          </MuiAlert>
        </Snackbar>
        <Grid container sx={{ background: 'floralwhite', height: '55%', width: '70%', position: 'absolute', top: '100px', left: '177px' }}>
          <Grid xs={6} lg={6} sx={{ background: 'antiquewhite' }}>

            <img src={profile} style={{ width: '477px', position: 'absolute', height: '350px' }}></img>

          </Grid>

          {/* <Grid xs={6} lg={6} sx={{background:'antiquewhite'}}>
<p>Hello</p>
</Grid> */}
          <Grid xs={6} lg={6} >
            <p style={{ textAlign: 'center', fontSize: '20px', fontWeight: 'bold' }}>LOGIN</p>


            <TextField style={{ position: 'absolute', right: '80px', width: '306px', top: '78px' }}
              required
              id="outlined-required"
              label="Email ID"


              value={credentials.name}
              name="name"
              onChange={handleCredentialChange}
            />

            <div>
              <TextField style={{ position: 'absolute', right: '80px', width: '306px', top: '170px' }}
                required
                id="outlined-required"
                label="Password ID"
                type='password'
                name='password'
                value={credentials.password}
                onChange={handleCredentialChange}
              />
            </div>
            <Grid lg={12}>
              <Button variant="contained" style={{ background: 'black ', position: 'absolute', top: '249px', left: '690px' }} onClick={loginSubmit}>LOGIN</Button>

            </Grid>
            {/* <Link href="/register" style={{position: 'absolute',top: '300px',right: '196px',color:'darkblue'}}>Register
        
        </Link> */}
            <Button style={{ position: 'absolute', top: '300px', right: '180px', color: 'darkblue' }} onClick={() => navigate("/register")}>Register</Button>





          </Grid>

        </Grid>


      </div>
    </>
  );
};

export default Login;
