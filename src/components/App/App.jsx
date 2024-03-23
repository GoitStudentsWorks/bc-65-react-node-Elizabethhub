import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout';
import WelcomePage from '../../pages/WelcomePage/WelcomePage';
import HomePage from '../../pages/Home/HomePage';
import LoginPage from '../../pages/LoginPage/LoginPage';
import RegistrationPage from '../../pages/RegistrationPage/RegistrationPage';
import PrivateRoute from '../../routes/PrivateRoute';
import PublicRoute from '../../routes/PublicRoute';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { currentThunk } from '../../store/auth/thunks';
import Loader from '../Loader/Loader';
import ErrorPage from '../Loader/ErrorPage';
import ForgotPassword from '../../pages/ForgotPassword/ForgotPassword';
import UpdatePassword from '../../pages/UpdatePassword/UpdatePassword';
import { selectorLoadingSelectorsSlise } from '../../store/loading/LoadingSelectorsSlise';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentThunk());
  }, [dispatch]);

  const loading = useSelector(selectorLoadingSelectorsSlise);

  return (
    <>
      {loading && <Loader />}
      {/* <Loader /> */}

      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={
              <PublicRoute>
                <WelcomePage />
              </PublicRoute>
            }
          />
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          />
          <Route
            path="/signin"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <PublicRoute>
                <RegistrationPage />
              </PublicRoute>
            }
          />
          <Route
            path="/forgot-password"
            element={
              <PublicRoute>
                <ForgotPassword />
              </PublicRoute>
            }
          />
          <Route
            path="/update-password/:tempCode"
            element={
              <PublicRoute>
                <UpdatePassword />
              </PublicRoute>
            }
          />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
