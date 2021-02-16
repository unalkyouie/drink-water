import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';

import { AppState } from '../reducers';

const WelcomeScreen = () => {
  const navigation = useNavigation();
  const isLogged = useSelector<AppState, boolean>((state) => state.auth.isAuth);
  const isLoading = useSelector<AppState, boolean>(
    (state) => state.auth.isLoading,
  );
  return (
    <>
      {isLoading && <ActivityIndicator style={styles.indictator} />}
      <TouchableHighlight
        style={{ backgroundColor: 'red', height: 200 }}
        onPress={() => {
          navigation.navigate(isLogged ? 'Home' : 'SignIn');
        }}
      />
    </>
  );
};
const styles = StyleSheet.create({
  indictator: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    left: 0,
    opacity: 1,
    position: 'absolute',
    right: 0,
    top: 0,
  },
});
export default WelcomeScreen;
