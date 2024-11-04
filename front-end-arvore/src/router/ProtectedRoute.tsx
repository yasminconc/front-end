import { Navigate, Outlet } from 'react-router-dom';

interface ProtectedRouteProps {
  redirectPath?: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ redirectPath = '/login' }) => {
  const isAuthenticated = Boolean(window.localStorage.getItem('token'));

  return isAuthenticated ? <Outlet /> : <Navigate to={redirectPath} />;
};

export default ProtectedRoute;
