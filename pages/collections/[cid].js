import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { doc, updateDoc, arrayUnion } from 'firebase/firestore';

import getAllStaticPaths from '../../utils/getAllStaticPaths';
import getItemById from '../../utils/getItemById';
import Modal from '../../components/Modal';
import { db } from '../../services/firebase-config';
import SizePickerForTops from '../../components/SizePickerForTops';
import SizePickerForBottoms from '../../components/SizePickerForBottoms';
import SizeChartForTops from '../../components/SizeChartForTops';
import SizeChartForBottoms from '../../components/SizeChartForBottoms';
import { getFormattedCurrency } from '../../utils/getFormattedCurrency';

const MainNav = styled.div`
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

  .card {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;

    .image {
      width: 330px;
    }

    .info {
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

            @media (hover: hover) {
              &:hover {
                text-decoration: underline;
              }
            }

            @media (hover: none) {
              &:active {
                text-decoration: underline;
              }
            }
          }
        }

        .error {
          margin-bottom: 16px;
          color: #ff4646;
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

            &.active {
              border-color: #4a00e0;
              color: #4a00e0;
            }

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
          font-weight: 500;
          border-radius: 6px;
          display: flex;
          justify-content: center;
          align-items: center;
          outline: none;
          cursor: pointer;
          border: none;
          width: 145px;
        }

        .cart {
          background: #8e2de2;
          background: -webkit-linear-gradient(to right, #8e2de2, #4a00e0);
          background: linear-gradient(to right, #8e2de2, #4a00e0);
          color: white;
          padding: 14px 28px;
          margin-left: 16px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .wishlist {
          background-color: white;
          border: 1px #4a00e0 solid;
          color: #4a00e0;
        }
      }
    }
  }

  @media (max-width: 640px) {
    padding: 16px;

    .card {
      flex-direction: column;

      .image {
        width: 100%;
      }

      .info {
        width: 100%;
        padding: 0;
        margin-bottom: 0;

        .brand {
          font-size: 18px;
          font-weight: 500;
        }

        .name {
          color: #777;
          margin: 8px 0;
        }

        .amount {
          font-size: 18px;
          font-weight: 500;
        }

        .size-box {
          margin-top: 16px;
        }

        .actions {
          margin-top: 24px;

          button {
            width: 100%;
          }
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

      &.jeans {
        width: 356px;
      }

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

const ItemDetails = ({ id, imageURL, brand, category, name, amount }) => {
  const [size, setSize] = useState('');
  const [showSizeChart, setShowSizeChart] = useState(false);
  const [promptSize, setPromptSize] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const cartItems = useSelector((state) => state.cart.items);
  const router = useRouter();

  const isWishlisted = !!wishlistItems.find((value) => value.itemId === id);

  const isAddedToCart = !!cartItems.find((value) => value.itemId === id);

  const openSizeChartHandler = () => {
    setShowSizeChart(true);
  };

  const closeSizeChartHandler = () => {
    setShowSizeChart(false);
  };

  const addToWishlistHandler = () => {
    if (user) {
      updateDoc(doc(db, user.uid, 'wishlist'), {
        items: arrayUnion({
          itemId: id,
          itemSize: size || null,
        }),
      }).catch((error) => console.log(error));
    } else {
      router.push('/signin');
    }
  };

  const addToCartHandler = () => {
    if (user) {
      if (size) {
        setPromptSize(false);
        updateDoc(doc(db, user.uid, 'cart'), {
          items: arrayUnion({
            itemId: id,
            itemSize: size,
          }),
        }).catch((error) => console.log(error));
      } else {
        setPromptSize(true);
      }
    } else {
      router.push('/signin');
    }
  };

  const goToCartHandler = () => {
    router.push('/cart');
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
          <div className="image">
            <Image
              src={imageURL}
              width={330}
              height={412}
              layout="responsive"
            />
          </div>
          <div className="info">
            <div className="brand">{brand}</div>
            <div className="name">{name}</div>
            <div className="amount">{`Rs. ${getFormattedCurrency(
              amount
            )}`}</div>
            <div className="size-box">
              <div className="head">
                <div className="title">Select Size</div>
                <div className="chart" onClick={openSizeChartHandler}>
                  Size Chart
                </div>
              </div>
              {promptSize && <div className="error">Please select a size</div>}
              <div className="sizes">
                {category === 'Jeans' ? (
                  <SizePickerForBottoms
                    currentSize={size}
                    onSetSize={setSize}
                  />
                ) : (
                  <SizePickerForTops currentSize={size} onSetSize={setSize} />
                )}
              </div>
            </div>
            <div className="actions">
              <button
                className="wishlist"
                onClick={addToWishlistHandler}
                disabled={isWishlisted}
              >
                {isWishlisted ? 'Wishlisted' : 'Wishlist'}
              </button>
              <button
                className="cart"
                onClick={isAddedToCart ? goToCartHandler : addToCartHandler}
              >
                {isAddedToCart ? 'Go to Cart' : 'Add to Cart'}
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
              {category === 'Jeans' ? (
                <SizeChartForBottoms />
              ) : (
                <SizeChartForTops />
              )}
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
