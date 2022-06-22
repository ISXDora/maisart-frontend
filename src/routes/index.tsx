import React from 'react';
import { Route} from 'react-router-dom';
import { Home } from "../pages/Home";
import { Profile } from '../pages/Profile';


const Routes: React.FC<any>= () => (
    <Routes>
        
      <Route
        path="/"
        element={ <Home/> }
      />
      <Route 
        path="/profile"
        element={ <Profile/> } />
    
    </Routes>
  );
  
  export default Routes;