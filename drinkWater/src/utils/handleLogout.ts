import auth from '@react-native-firebase/auth';

import { showToast } from './showToast';

export const handleLogout = async (onLogout: () => void) => {
  await auth()
    .signOut()
    .then(() => onLogout())
    .catch((error) => alert(error));
};
