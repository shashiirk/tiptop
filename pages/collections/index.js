import Link from 'next/link';
import styled from 'styled-components';

import BrandFilter from '../../components/BrandFilter';
import CategoryFilter from '../../components/CategoryFilter';
import SortSelect from '../../components/SortSelect';

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
  }
`;

const Products = () => {
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
        </main>
      </Div>
    </>
  );
};

export default Products;
