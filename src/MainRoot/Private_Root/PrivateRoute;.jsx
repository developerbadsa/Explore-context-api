

import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { userContext } from '../../Components/UserProvider';

const PrivateRoute = ({ children }) => {
  const {user} = useContext(userContext)


    
  const isAuthenticated = true; 

  return !user ? children : <Navigate to="/" />;
};

export default PrivateRoute;
