import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout';
import WelcomePage from '../../pages/WelcomePage/WelcomePage';
import HomePage from '../../pages/Home/HomePage';
import LoginPage from '../../pages/LoginPage/LoginPage';
import RegistrationPage from '../../pages/RegistrationPage/RegistrationPage';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/signin" element={<LoginPage />} />
        <Route path="/signup" element={<RegistrationPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
