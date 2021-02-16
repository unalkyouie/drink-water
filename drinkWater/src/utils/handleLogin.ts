import auth from '@react-native-firebase/auth';

import { showToast } from './showToast';

export const handleLogin = (
  email: string,
  password: string,
  onLogin: () => void,
) => {
  auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => onLogin())
    .catch((error) => showToast(error.message));
};
