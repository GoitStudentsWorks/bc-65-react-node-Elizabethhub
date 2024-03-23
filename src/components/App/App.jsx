import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Suspense, lazy, useEffect } from 'react';
import { currentThunk } from '../../store/auth/thunks';

import Layout from '../Layout/Layout';
import PrivateRoute from '../../routes/PrivateRoute';
import PublicRoute from '../../routes/PublicRoute';

const ErrorPage = lazy(() => import('../Loader/ErrorPage'));
const WelcomePage = lazy(() => import('../../pages/WelcomePage/WelcomePage'));
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));
const RegistrationPage = lazy(() =>
  import('../../pages/RegistrationPage/RegistrationPage')
);
const HomePage = lazy(() => import('../../pages/Home/HomePage'));
const ForgotPassword = lazy(() =>
  import('../../pages/ForgotPassword/ForgotPassword')
);
const UpdatePassword = lazy(() =>
  import('../../pages/UpdatePassword/UpdatePassword')
);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentThunk());
  }, [dispatch]);
  // const loading = useSelector((state) => state.auth.isLoading);
  return (
    <>
      {/* {loading && <Loader />} */}
      {/* <Loader /> */}

      <Suspense fallback={<h1>Loading...</h1>}>
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
      </Suspense>
    </>
  );
}

export default App;
