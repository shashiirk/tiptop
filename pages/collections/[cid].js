import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

import getAllStaticPaths from '../../utils/getAllStaticPaths';
import getItemById from '../../utils/getItemById';
import Modal from '../../components/Modal';
import { WishlistIcon } from '../../assets/icons';

const MainNav = styled.div`
  /* border: 1px green solid; */
  font-size: 14px;
  background-color: #f4f4f4;
  padding: 16px;
  text-align: center;

  a {
    text-decoration: none;
    color: inherit;
  }

  span {
    color: #999;
  }
`;

const Div = styled.div`
  padding: 32px;
  /* border: 1px green solid; */

  .card {
    /* border: 1px #eee solid; */
    border-radius: 12px;
    width: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    /* box-shadow: 0 0 5px rgba(0, 0, 0, 0.05); */

    /* img {
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
    } */

    .info {
      /* border: 1px green solid; */
      margin: 16px;
      padding: 16px;

      .brand {
        font-size: 20px;
        font-weight: 500;
      }

      .name {
        color: #777;
        margin: 16px 0;
      }

      .amount {
        font-size: 20px;
        font-weight: 500;
      }

      .size-box {
        margin-top: 32px;

        .head {
          /* border: 1px red solid; */
          margin-bottom: 16px;
          display: flex;
          align-items: baseline;

          .title {
            font-weight: 500;
          }

          .chart {
            color: #4a00e0;
            margin-left: 16px;
            font-size: 14px;
            cursor: pointer;
          }
        }

        .sizes {
          display: flex;

          button {
            font: inherit;
            font-size: 14px;
            font-weight: 500;
            border: 1px #ddd solid;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 50px;
            height: 50px;
            margin-right: 8px;
            background-color: white;
            cursor: pointer;

            &:last-child {
              margin-right: 0;
            }

            @media (hover: hover) {
              transition: border 240ms;

              &:hover {
                border-color: #4a00e0;
              }
            }
          }
        }
      }

      .actions {
        margin-top: 32px;
        display: flex;

        button {
          font: inherit;
          border-radius: 10px;
          display: block;
          outline: none;
          cursor: pointer;
          border: none;
        }

        .cart {
          background: #8e2de2;
          background: -webkit-linear-gradient(to right, #8e2de2, #4a00e0);
          background: linear-gradient(to right, #8e2de2, #4a00e0);
          color: white;
          font-weight: 500;
          padding: 14px 28px;
          width: 100%;
          margin-right: 16px;
          box-shadow: 0 0 12px rgba(0, 0, 0, 0.24);
        }

        .wishlist {
          padding: 0 12px;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: white;
          border: 1px #4a00e0 solid;
          color: #4a00e0;
        }
      }
    }
  }
`;

const ModalDiv = styled.div`
  padding: 16px;

  .title {
    color: #4a00e0;
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 16px;
  }

  .table {
    overflow: auto;

    table {
      border-collapse: collapse;
      font-size: 14px;
      width: 474px;

      th {
        font-weight: 500;
      }

      td,
      th {
        border-top: 1px solid #ddd;
        border-bottom: 1px solid #ddd;
        text-align: center;
        padding: 16px;
      }

      tr {
        th:first-child,
        td:first-child {
          border-left: 1px solid #ddd;
        }

        th:last-child,
        td:last-child {
          border-right: 1px solid #ddd;
        }
      }
    }
  }
`;

const ItemDetails = ({ id, imageURL, brand, name, amount }) => {
  const [showSizeChart, setShowSizeChart] = useState(false);

  const openSizeChartHandler = () => {
    setShowSizeChart(true);
  };

  const closeSizeChartHandler = () => {
    setShowSizeChart(false);
  };

  return (
    <>
      <MainNav>
        <Link href="/">Home</Link>
        {' / '}
        <Link href="/collections">Collections</Link>
        {' / '}
        <span>{` ${brand} ${name}`}</span>
      </MainNav>
      <Div>
        <div className="card">
          <Image src={imageURL} width={330} height={412} />
          <div className="info">
            <div className="brand">{brand}</div>
            <div className="name">{name}</div>
            <div className="amount">{`Rs. ${amount}`}</div>
            <div className="size-box">
              <div className="head">
                <div className="title">Select Size</div>
                <div className="chart" onClick={openSizeChartHandler}>
                  Size Chart
                </div>
              </div>
              <div className="sizes">
                <button>S</button>
                <button>M</button>
                <button>L</button>
                <button>XL</button>
              </div>
            </div>
            <div className="actions">
              <button className="cart">Add to Cart</button>
              <button className="wishlist">
                <WishlistIcon />
              </button>
            </div>
          </div>
        </div>
      </Div>
      {showSizeChart && (
        <Modal closeHandler={closeSizeChartHandler}>
          <ModalDiv>
            <div className="title">Size Chart</div>
            <div className="table">
              <table>
                <tr>
                  <th>Size</th>
                  <th>Chest (in)</th>
                  <th>Front Length (in)</th>
                  <th>Across Shoulder (in)</th>
                </tr>
                <tr>
                  <td>S</td>
                  <td>38.0</td>
                  <td>29.5</td>
                  <td>18.0</td>
                </tr>
                <tr>
                  <td>M</td>
                  <td>41.0</td>
                  <td>30.0</td>
                  <td>18.5</td>
                </tr>
                <tr>
                  <td>L</td>
                  <td>44.0</td>
                  <td>30.5</td>
                  <td>19.0</td>
                </tr>
                <tr>
                  <td>XL</td>
                  <td>46.0</td>
                  <td>31.0</td>
                  <td>19.5</td>
                </tr>
              </table>
            </div>
          </ModalDiv>
        </Modal>
      )}
    </>
  );
};

export const getStaticPaths = () => {
  const paths = getAllStaticPaths();

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = (context) => {
  const cid = context.params.cid;
  const item = getItemById(cid);

  return {
    props: {
      ...item,
    },
  };
};

export default ItemDetails;
