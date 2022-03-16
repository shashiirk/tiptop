import { useRouter } from 'next/router';
import styled from 'styled-components';
import Head from 'next/head';

const Div = styled.div`
  margin: auto;
  h1 {
    text-align: center;
    font-size: 64px;
    font-weight: 600;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

    @media (max-width: 640px) {
      font-size: 56px;
    }
  }

  p {
    text-align: center;
    margin: 30px 0 40px 0;
  }

  button {
    display: block;
    font: inherit;
    font-weight: 500;
    border-radius: 10px;
    border: none;
    padding: 14px 42px;
    margin: auto;
    background: #8e2de2;
    background: -webkit-linear-gradient(to right, #8e2de2, #4a00e0);
    background: linear-gradient(to right, #8e2de2, #4a00e0);
    color: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
`;

const Error = () => {
  const router = useRouter();

  const goHomeHandler = () => {
    router.replace('/');
  };

  return (
    <>
      <Head>
        <title>Page not found</title>
      </Head>
      <Div>
        <h1>404.</h1>
        <p>The page you're looking for cannot be found.</p>
        <button onClick={goHomeHandler}>Go Home</button>
      </Div>
    </>
  );
};

export default Error;
