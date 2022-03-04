import styled, { createGlobalStyle } from 'styled-components';

import NavBar from '../components/NavBar';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    /* border: 2px green solid; */
    min-height: 100vh;
    font-family: 'Inter', sans-serif;
    -webkit-tap-highlight-color: transparent;
  }

  *::selection {
    background-color: #b699f2;
  }
`;

const Container = styled.div`
  /* border: 1px red solid; */
  min-height: 100vh;
  max-width: 1440px;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <NavBar />
        <Component {...pageProps} />
      </Container>
    </>
  );
};

export default MyApp;
