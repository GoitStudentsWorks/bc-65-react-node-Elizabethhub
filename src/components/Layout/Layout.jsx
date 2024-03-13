import { Outlet } from 'react-router-dom';
import Header from '../Header/Header.jsx';
import { Container, DivImgContainer } from './Layout.styled.js';

const Layout = () => {
  return (
    <>
      <DivImgContainer />

      <header>
        <Container>
          <Header />
        </Container>
      </header>
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
    </>
  );
};

export default Layout;
