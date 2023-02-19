import { Routes, Route } from 'react-router-dom';

import Registration from './Pages/RegistrationPage/Registration';
import Contex from './contex/Contex'
import Error404 from './Pages/ErrorPage/Error404';
import LogIn from './Pages/LoginPage/LogIn';
import ProtectedRoute from './components/protected-route/protectedRoute';


export const AppRoutes = (props) => {
  
  const isLoggedIn = localStorage.getItem('isLoggedIn');

  return (
    <Routes>
      <Route path="/reg" element={<Registration {...props} />} />
      <Route path="/" element={<LogIn {...props} />} />
      <Route path="*" element={<Error404 />} />
      <Route element={<ProtectedRoute isAllowed={isLoggedIn} />}>
        <Route path="/main/" element={<Contex {...props} />} />
        <Route path="/main/compilation/:id" element={<Contex {...props} />} />
      </Route>
    </Routes>
  );
};
