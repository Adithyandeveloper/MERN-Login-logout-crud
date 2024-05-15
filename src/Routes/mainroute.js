import { Children, lazy ,Suspense } from "react";
import { Routes, Route, Link } from 'react-router-dom';
import MainLayout from "./MainLayout";
import Mainlayout from "../components/Sidemenu/Mainlayout";


const Homes = lazy(()=>import('../components/pages/Home'));
const Channel = lazy(()=>import ('../components/pages/Channel'));


const MainRoute = {
    path:'/',
    element : <Mainlayout />,
    Children:[
        {
            path: '/dasboard',
            element:<Homes></Homes>
        },                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
        {
            path:'/channel',
            element:<Channel></Channel>
        },
        

    ]
}
export default MainRoute;