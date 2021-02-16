import { ToastAndroid } from 'react-native';

export const showToast = (error: string) => {
  ToastAndroid.show(error, ToastAndroid.SHORT);
};
