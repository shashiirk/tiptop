import Link from 'next/link';
import styled from 'styled-components';

const Div = styled.div`
  /* background-color: #f6f6f6; */
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
  text-align: center;

  .title {
    font-size: 64px;
    font-weight: 600;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }

  .text {
    margin-top: 30px;
  }

  a {
    display: block;
    margin-top: 40px;
    padding: 14px 42px;
    text-decoration: none;
    font-weight: 500;
    border: none;
    border-radius: 12px;
    background: #8e2de2;
    background: -webkit-linear-gradient(to right, #8e2de2, #4a00e0);
    background: linear-gradient(to right, #8e2de2, #4a00e0);
    color: white;
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.24);
  }
`;

const Home = () => {
  return (
    <Div>
      <p className="title">Wear better, look better.</p>
      <p className="text">Don't you just love being in apparel?</p>
      <Link href="/products">Shop Now</Link>
    </Div>
  );
};

export default Home;
