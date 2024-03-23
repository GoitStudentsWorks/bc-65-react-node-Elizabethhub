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
import { useEffect, useState } from 'react';

const Layout = () => {
  const storedTheme = localStorage.getItem('theme');
  const [theme, setTheme] = useState(storedTheme || 'light');
  const isDarkTheme = theme === 'dark';

  const toggleTheme = () => {
    const newTheme = isDarkTheme ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    const handleStorageChange = () => {
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme && storedTheme !== theme) {
        setTheme(storedTheme);
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [theme]);

  return (
    <>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <GlobalStyles />
        <BackgraundContainer />
        <StyledApp>
          {/* <Switch toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} /> */}
          <header>
            <Container>
              <Header toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
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
