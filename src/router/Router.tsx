import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Signup from '../pages/signup/signup'
import ProtectedRoute from './ProtectedRoute'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router
