import { Route, Routes, useLocation } from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';
import { currentThunk } from '../../store/auth/thunks';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../store/auth/selectors';
import Layout from '../Layout/Layout';
import PrivateRoute from '../../routes/PrivateRoute';
import PublicRoute from '../../routes/PublicRoute';
import Loader from '../Loader/Loader';
import { selectorLoadingSelectorsSlise } from '../../store/loading/LoadingSelectorsSlise';
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
  const user = useSelector(selectUser);
  const location = useLocation();
  useEffect(() => {
    if (!user && location.pathname === '/home') {
      dispatch(currentThunk());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, location.pathname]);

  const loading = useSelector(selectorLoadingSelectorsSlise);

  return (
    <>
      {loading && <Loader />}

      <Suspense fallback={<Loader />}>
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
