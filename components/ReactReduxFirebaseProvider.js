import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, onSnapshot } from 'firebase/firestore';

import { auth } from '../services/firebase-config';
import { authActions } from '../store/authSlice';
import { wishlistActions } from '../store/wishlistSlice';
import { cartActions } from '../store/cartSlice';
import { db } from '../services/firebase-config';
import Loading from './Loading';

const ReactReduxFirebaseWrapper = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const userInfo = {
          accessToken: user.accessToken,
          email: user.email,
          uid: user.uid,
        };
        dispatch(authActions.setUser(userInfo));

        onSnapshot(doc(db, user.uid, 'wishlist'), (document) => {
          const items = document.data().items;
          dispatch(wishlistActions.setItems(items));

          onSnapshot(doc(db, user.uid, 'cart'), (document) => {
            const items = document.data().items;
            dispatch(cartActions.setItems(items));
            setIsLoading(false);
          });
        });
      } else {
        dispatch(authActions.setUser(null));
        setIsLoading(false);
      }
    });

    return unsubscribe;
  }, []);

  return isLoading ? <Loading /> : <>{children}</>;
};

export default ReactReduxFirebaseWrapper;
