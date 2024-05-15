import { lazy ,Suspense } from "react";

import { Routes, Route, Link } from 'react-router-dom';

const Login = lazy(() => import('../Auth/login'));
const Register = lazy(() => import('../Auth/register'));

const AutheticationRoute = () => {
    return (
        <div>
        <Suspense fallback={<div style={{background:'floralwhite'}}></div>}>
          <Routes>
          <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Suspense>
      </div>
 

    )
}

export default AutheticationRoute;

