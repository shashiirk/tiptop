import styled from 'styled-components';
import Link from 'next/link';

import EmptyWishlist from '../components/EmptyWishlist';
import SignInPromptTemplate from '../components/SignInPromptTemplate';
import WishlistItemCard from '../components/WishlistItemCard';

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
  padding: 16px;

  .title {
    font-size: 18px;
    font-weight: 500;

    span {
      font-size: 16px;
      font-weight: 400;
    }
  }

  .clothes {
    margin: 16px 0;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 16px;
  }
`;

const CLOTHES = [
  {
    id: '2430',
    imageURL:
      'https://firebasestorage.googleapis.com/v0/b/tiptop-store.appspot.com/o/Hollister_Shirt_5.jpg?alt=media',
    brand: 'Hollister',
    category: 'Shirt',
    name: 'White Pattern Shirt',
    amount: '1455',
  },
  {
    id: '2431',
    imageURL:
      'https://firebasestorage.googleapis.com/v0/b/tiptop-store.appspot.com/o/Hollister_Hoodie_1.jpg?alt=media',
    brand: 'Hollister',
    category: 'Hoodie',
    name: 'Gray Colorblock Hoodie',
    amount: '2400',
  },
];

const Wishlist = () => {
  return (
    <>
      <MainNav>
        <Link href="/">Home</Link> / <span>Wishlist</span>
      </MainNav>
      <Div>
        <div className="title">
          Wishlist <span>({CLOTHES.length} items)</span>
        </div>
        <div className="clothes">
          {CLOTHES.map((item) => (
            <WishlistItemCard key={item.id} {...item} />
          ))}
        </div>
      </Div>
    </>
  );
};

export default Wishlist;
