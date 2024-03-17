import { useSelector } from 'react-redux';
import { selectToken } from '../store/auth/selectors';
import { Navigate } from 'react-router';

const PublicRoute = ({ children }) => {
  const token = useSelector(selectToken);

  if (!token) {
    return children;
  }
  return <Navigate to={'/home'} />;
};

export default PublicRoute;
