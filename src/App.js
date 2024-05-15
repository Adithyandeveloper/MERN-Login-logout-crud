import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Route,MemoryRouter } from 'react-router-dom';
import MainRoute from './Routes/mainroute';
import Sidemenu from './components/Sidemenu/sidemenu';
import Home from './components/pages/Home';
import Channel from './components/pages/Channel';
import Mainlayout from './components/Sidemenu/Mainlayout';
import Routes from './Routes/'
import Login from './Auth/login';
import AutheticationRoute from './Routes/authroute';
import Sidenav from './components/Sidemenu/side';
import { myContext } from './store/createcontext';
import { useContext, useEffect } from 'react';
import MainPage from './Routes/mainpage';
import Pagenotfound from './components/pages/pagenotfound';
function App() {
  const {userIn,change,setUserIn}= useContext(myContext)
  useEffect(()=>{
   console.log("navigate login")
   if(sessionStorage.getItem('sessionID')){
         change('true')
   } 
   else 
   {
         change(false)
         setUserIn('false')
        
          
   }
  
   
  },[])
  useEffect(()=>{
    console.log("navigate login")
    
   },[change])
  return (
    
    <Router>
 {/* <Sidenav></Sidenav> */}
   {
    
  
    userIn== 'false' ? <AutheticationRoute></AutheticationRoute> : <MainPage></MainPage>
   }
     </Router>
  );
}


export default App;
