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

  const subscriptions = [];

  useEffect(() => {
    const authSub = onAuthStateChanged(
      auth,
      (user) => {
        if (user) {
          const userInfo = {
            accessToken: user.accessToken,
            email: user.email,
            uid: user.uid,
          };
          dispatch(authActions.setUser(userInfo));

          const wishlistSub = onSnapshot(
            doc(db, user.uid, 'wishlist'),
            (document) => {
              try {
                const items = document.data().items;
                dispatch(wishlistActions.setItems(items));

                const cartSub = onSnapshot(
                  doc(db, user.uid, 'cart'),
                  (document) => {
                    try {
                      const items = document.data().items;
                      dispatch(cartActions.setItems(items));
                      setIsLoading(false);
                    } catch (error) {
                      setIsLoading(false);
                    }
                  },
                  (error) => {
                    setIsLoading(false);
                  }
                );

                subscriptions.push(cartSub);
              } catch (error) {
                setIsLoading(false);
              }
            },
            (error) => {
              setIsLoading(false);
            }
          );

          subscriptions.push(wishlistSub);
        } else {
          dispatch(authActions.setUser(null));
          dispatch(wishlistActions.setItems([]));
          dispatch(cartActions.setItems([]));
          setIsLoading(false);
        }
      },
      (error) => {
        setIsLoading(false);
      }
    );

    subscriptions.push(authSub);

    const unSubscribeAll = () => {
      subscriptions.forEach((sub) => sub());
      subscriptions.length = 0;
    };

    return unSubscribeAll;
  }, []);

  return isLoading ? <Loading /> : <>{children}</>;
};

export default ReactReduxFirebaseWrapper;
