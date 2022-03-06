import getAllStaticPaths from '../../utils/getAllStaticPaths';
import getItemById from '../../utils/getItemById';

const ItemDetails = ({ id, imageURL, brand, name, amount }) => {
  return (
    <>
      <div>{brand}</div>
      <div>{name}</div>
      <div>{amount}</div>
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
