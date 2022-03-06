import Link from 'next/link';
import styled from 'styled-components';

import BrandFilter from '../../components/BrandFilter';
import CategoryFilter from '../../components/CategoryFilter';
import ItemCard from '../../components/ItemCard';
import SortSelect from '../../components/SortSelect';
import getItems from '../../utils/getItems';

const MainNav = styled.div`
  /* border: 1px green solid; */
  font-size: 13px;
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
  /* border: 1px red solid; */
  flex: 1;
  display: flex;

  .aside {
    /* border: 1px blue solid; */
    width: 400px;
    padding: 16px;

    .title {
      font-size: 18px;
      font-weight: 500;
    }
  }

  .main {
    /* border: 1px green solid; */
    width: 100%;
    padding: 16px;

    .top {
      /* border: 1px green solid; */
      display: flex;

      .title {
        font-size: 18px;
        font-weight: 500;
        margin-right: auto;
      }
    }

    .clothes {
      margin: 16px 0;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 16px;
    }
  }
`;

const CLOTHES = [
  {
    id: '2426',
    imageURL:
      'https://firebasestorage.googleapis.com/v0/b/tiptop-store.appspot.com/o/Hollister_Shirt_1.jpg?alt=media',
    brand: 'Hollister',
    category: 'Shirt',
    name: 'Navy Oxford Shirt',
    amount: '2255',
  },
  {
    id: '2427',
    imageURL:
      'https://firebasestorage.googleapis.com/v0/b/tiptop-store.appspot.com/o/Hollister_Shirt_2.jpg?alt=media',
    brand: 'Hollister',
    category: 'Shirt',
    name: 'White Oxford Shirt',
    amount: '2255',
  },
  {
    id: '2428',
    imageURL:
      'https://firebasestorage.googleapis.com/v0/b/tiptop-store.appspot.com/o/Hollister_Shirt_3.jpg?alt=media',
    brand: 'Hollister',
    category: 'Shirt',
    name: 'Blue Poplin Shirt',
    amount: '2255',
  },
  {
    id: '2429',
    imageURL:
      'https://firebasestorage.googleapis.com/v0/b/tiptop-store.appspot.com/o/Hollister_Shirt_4.jpg?alt=media',
    brand: 'Hollister',
    name: 'Red Poplin Shirt',
    amount: '2255',
  },
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
  {
    id: '2432',
    imageURL:
      'https://firebasestorage.googleapis.com/v0/b/tiptop-store.appspot.com/o/Hollister_Hoodie_2.jpg?alt=media',
    brand: 'Hollister',
    category: 'Hoodie',
    name: 'Pink Icon Hoodie',
    amount: '2400',
  },
  {
    id: '2433',
    imageURL:
      'https://firebasestorage.googleapis.com/v0/b/tiptop-store.appspot.com/o/Hollister_Hoodie_3.jpg?alt=media',
    brand: 'Hollister',
    category: 'Hoodie',
    name: 'Navy Tie-Dye Icon Hoodie',
    amount: '2550',
  },
  {
    id: '2434',
    imageURL:
      'https://firebasestorage.googleapis.com/v0/b/tiptop-store.appspot.com/o/Hollister_Hoodie_4.jpg?alt=media',
    brand: 'Hollister',
    category: 'Hoodie',
    name: 'Navy Colorblock Hoodie',
    amount: '2400',
  },
  {
    id: '2435',
    imageURL:
      'https://firebasestorage.googleapis.com/v0/b/tiptop-store.appspot.com/o/Hollister_Polo_1.jpg?alt=media',
    brand: 'Hollister',
    category: 'Polo',
    name: 'Burgundy Icon Polo',
    amount: '1450',
  },
  {
    id: '2436',
    imageURL:
      'https://firebasestorage.googleapis.com/v0/b/tiptop-store.appspot.com/o/Hollister_Polo_2.jpg?alt=media',
    brand: 'Hollister',
    category: 'Polo',
    name: 'Black Mint Icon Polo',
    amount: '1450',
  },
  {
    id: '2437',
    imageURL:
      'https://firebasestorage.googleapis.com/v0/b/tiptop-store.appspot.com/o/Hollister_Polo_3.jpg?alt=media',
    brand: 'Hollister',
    category: 'Polo',
    name: 'Pink Icon Polo',
    amount: '1450',
  },
  {
    id: '2438',
    imageURL:
      'https://firebasestorage.googleapis.com/v0/b/tiptop-store.appspot.com/o/Hollister_Jeans_1.jpg?alt=media',
    brand: 'Hollister',
    category: 'Jeans',
    name: 'Black Skinny Jeans',
    amount: '2600',
  },
  {
    id: '2439',
    imageURL:
      'https://firebasestorage.googleapis.com/v0/b/tiptop-store.appspot.com/o/Hollister_Jeans_2.jpg?alt=media',
    brand: 'Hollister',
    category: 'Jeans',
    name: 'Light Wash Skinny Jeans',
    amount: '2600',
  },
  {
    id: '2440',
    imageURL:
      'https://firebasestorage.googleapis.com/v0/b/tiptop-store.appspot.com/o/Hollister_Jeans_3.jpg?alt=media',
    brand: 'Hollister',
    category: 'Jeans',
    name: 'Wash Skinny Jeans',
    amount: '2980',
  },
];

const Products = ({ clothes }) => {
  return (
    <>
      <MainNav>
        <Link href="/">Home</Link> / <span>Collections</span>
      </MainNav>
      <Div>
        <aside className="aside">
          <div className="title">Filters</div>
          <BrandFilter />
          <CategoryFilter />
        </aside>
        <main className="main">
          <div className="top">
            <div className="title">Collections</div>
            <SortSelect />
          </div>
          <div className="clothes">
            {clothes.map((item) => (
              <ItemCard key={item.id} {...item} />
            ))}
          </div>
        </main>
      </Div>
    </>
  );
};

export const getStaticProps = (context) => {
  const items = getItems();

  return {
    props: {
      clothes: items,
    },
  };
};

export default Products;
