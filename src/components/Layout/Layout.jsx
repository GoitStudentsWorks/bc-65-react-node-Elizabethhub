import { Outlet } from 'react-router-dom';
import Header from '../Header/Header.jsx';
import { Container, Main } from './Layout.styled.js';
import { BackgraundContainer } from './BackgraundContainer.styled.js';

import {
  GlobalStyles,
  StyledApp,
  darkTheme,
  lightTheme,
} from '../Header/ThemeStyled/Theme.styled.jsx';

import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import Switch from '../Header/ThemeStyled/SwitchTheme/Switch.jsx';

const Layout = () => {
  const [theme, setTheme] = useState('light');
  const isDarkTheme = theme === 'dark';
  const toggleTheme = () => {
    setTheme(isDarkTheme ? 'light' : 'dark');
  };
  return (
    <>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <GlobalStyles />
        <StyledApp>
          <Switch toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
          {/* <BackgraundContainer /> */}
          <header>
            <Container>
              <Header />
            </Container>
          </header>
          <Main>
            <Container>
              <Outlet />
            </Container>
          </Main>
        </StyledApp>
      </ThemeProvider>
    </>
  );
};

export default Layout;
