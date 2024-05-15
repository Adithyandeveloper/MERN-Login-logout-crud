import {React,useState} from 'react'
import { styled } from '@mui/material/styles';
import { Grid,Paper,TextField,Button,Link, Snackbar,
  IconButton, } from '@mui/material';
import registerlogo from '../Assets/registerlogo.jpg'
import Login from './login';
import { useNavigate } from 'react-router-dom';
import MuiAlert from '@mui/material/Alert';
import { autnservice } from '../service/authservice';
const Register = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const {registerApi} = autnservice()
  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };
    const navigate =  useNavigate()
  const RegisterContainer = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.primary.light,
    
  }));
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const loginRoute = () =>{
    console.log("clciked to route")

  }

   


  const INITIAL_CREDENTIALS = {
    name: '',
    password: '',
  };
  
  const [credentials, setCredentials] = useState(INITIAL_CREDENTIALS);
  
  const handleCredentialChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };
  
  const loginSubmit = () =>{
    console.log(credentials,"Loginform")
    setOpenSnackbar(true);   
    
    registerApi(credentials).then((res)=>{
      if(res['data']){
        setOpenSnackbar(true);  
        setTimeout(()=>{
             navigate('/')
        },1000) 
      }else {
     
            
      }
    },err=>{
   
       
    })

  }


  return (
    <>
      {/* <RegisterContainer  sx={{background:'#b5864d',height:'100vh' ,width:'100%',position:'relative'}} > */}
       
      <Grid container lg={12} sx={{background:'floralwhite',minHeight:'64%',width:'50%',position: 'absolute',top: '84px',left: '310px'}}>
      <Grid lg={6} >
<img src={registerlogo} style={{height:'420px',width: '320px'}}></img>
      </Grid>
      <Grid lg={6} >
        <h3 style={{textAlign:'center'}}>REGISTER</h3>
       
        <TextField  style={{top: '35px',right: '-57px'}}
          required
          id="outlined-required"
          label="Email-ID"
          defaultValue=""
          value={credentials.name}
          name="name"
          onChange={handleCredentialChange}
        />
        <div>
        <TextField   style={{top: '65px',right: '-57px'}}
          required
          id="outlined-required"
          label="password"
          defaultValue=""
          name='password'
          value={credentials.password}
          onChange={handleCredentialChange}
        />
        </div>

        <Button variant="contained" style={{background:'black ',position: 'absolute',top: '265px',left: '455px'}} onClick={loginSubmit}>Register</Button>
        
        <Button style={{position: 'absolute',
  top: '310px',
  right: '122px'}}  onClick={()=> navigate("/login")}>Login Page</Button>

      </Grid>

      </Grid>
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

      {/* </RegisterContainer> */}
      

    </>
  )
}

export default Register