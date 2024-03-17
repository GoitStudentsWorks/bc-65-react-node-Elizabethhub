import { useSelector } from 'react-redux';
import { selectToken } from '../store/auth/selectors';
import { Navigate } from 'react-router';

const PrivateRoute = ({ children }) => {
  const token = useSelector(selectToken);

  if (!token) {
    return <Navigate to={'/signin'} />;
  }
  return children;
};

export default PrivateRoute;
