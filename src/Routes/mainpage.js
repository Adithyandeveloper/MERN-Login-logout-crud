import { lazy ,Suspense } from "react";

import { Routes, Route, Link } from 'react-router-dom';
import Pagenotfound from "../components/pages/pagenotfound";
const Login = lazy(() => import('../Auth/login'));
const Register = lazy(() => import('../Auth/register'));

const Sidemenu = lazy(()=>import('../components/Sidemenu/side'))

const MainPage=()=>{
    return(
        <div>
 <Suspense fallback={<div style={{background:'floralwhite'}}></div>}>
          <Routes>
          {/* <Route path="*" element={<Pagenotfound />} /> */}
            <Route path="/dashboard" element={<Sidemenu />} />
            
            <Route path="/" element={<Sidemenu />} />
         
          </Routes>
        </Suspense>
        </div>
    )
}
export default MainPage;