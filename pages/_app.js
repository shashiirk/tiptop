import { createGlobalStyle } from 'styled-components';

import NavBar from '../components/NavBar';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    min-height: 100vh;
    font-family: 'Inter', sans-serif;
    -webkit-tap-highlight-color: transparent;
  }
`;

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
