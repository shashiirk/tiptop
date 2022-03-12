import { createContext, useContext, useEffect, useState } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import { useSelector } from 'react-redux';

import { db } from '../services/firebase-config';

const CartContext = createContext({ items: [] });

export const CartProvider = ({ children }) => {
  const [itemsList, setItemsList] = useState([]);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (user) {
      const unsubscribe = onSnapshot(doc(db, user.uid, 'cart'), (doc) => {
        const items = doc.data().items;
        setItemsList(items);
      });

      return unsubscribe;
    }
  }, [user]);

  const cartContext = {
    items: itemsList,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
