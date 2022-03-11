import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';

import { auth } from '../services/firebase-config';
import { authActions } from '../store/authSlice';

const ReactReduxFirebaseWrapper = ({ children }) => {
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
      } else {
        dispatch(authActions.setUser(null));
      }
    });

    return unsubscribe;
  }, []);

  return <>{children}</>;
};

export default ReactReduxFirebaseWrapper;
