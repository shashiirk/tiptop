import { createContext, useContext, useEffect, useState } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import { useSelector } from 'react-redux';

import { db } from '../services/firebase-config';

const WishlistContext = createContext({ items: [] });

export const WishlistProvider = ({ children }) => {
  const [itemsList, setItemsList] = useState([]);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (user) {
      const unsubscribe = onSnapshot(doc(db, user.uid, 'wishlist'), (doc) => {
        const items = doc.data().items;
        setItemsList(items);
      });

      return unsubscribe;
    }
  }, [user]);

  const wishlistContext = {
    items: itemsList,
  };

  return (
    <WishlistContext.Provider value={wishlistContext}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
