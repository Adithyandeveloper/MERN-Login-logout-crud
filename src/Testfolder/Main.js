// MainLayout.jsx

import React from 'react';
import Mainheader from '../Testfolder/Mainheader';
import Mainsidebar from '../Testfolder/Mainsidebar'
import {Routes, Route} from 'react-router-dom';
import Homes from '../components/pages/Home';
import Channel from '../components/pages/Channel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//   },
//   content: {
//     flexGrow: 1,
//     padding: theme.spacing(3),
//   },
// }));

const MainLayout = () => {
  
  return (
    <div>
      <Mainheader />
      <Mainsidebar />
      <main >
        <Routes>
        <Route  path="/home" Component={<Homes />}>

          </Route>
          {/* Channel Route */}
          <Route  path="/channel" Component={<Homes />}>
           
          </Route >
        </Routes>
      </main>
    </div>
  );
};

export default MainLayout;
