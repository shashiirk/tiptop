import data from '../pages/api/data.json';

const getItems = () => {
  return data.clothes;
};

export default getItems;
