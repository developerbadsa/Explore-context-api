

import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { userContext } from '../../Components/UserProvider';

const PrivateRoute = ({ children }) => {
  const {user} = useContext(userContext)


  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
