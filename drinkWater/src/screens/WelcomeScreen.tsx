import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { ActivityIndicator, Dimensions, StyleSheet, Text } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';

import { AppState } from '../reducers';
import { isLoggedOut, logIn } from '../reducers/authReducer';
import { AppDispatch } from '../store';

const { height, width } = Dimensions.get('window');

const WelcomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch<AppDispatch>();
  const isLogged = useSelector<AppState, boolean>((state) => state.auth.isAuth);
  const isLoading = useSelector<AppState, boolean>(
    (state) => state.auth.isLoading,
  );
  useEffect(() => {
    auth().onAuthStateChanged((user) =>
      user ? dispatch(logIn()) : dispatch(isLoggedOut()),
    );
  }, [dispatch]);
  return (
    <>
      {isLoading && (
        <ActivityIndicator
          style={styles.indictator}
          size={'large'}
          color={'#FCD581'}
        />
      )}
      <TouchableHighlight
        style={styles.container}
        onPress={() => {
          navigation.navigate(isLogged ? 'Home' : 'SignIn');
        }}>
        <Text style={styles.text}>Tap to start</Text>
      </TouchableHighlight>
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
  container: {
    backgroundColor: '#094D92',
    height,
    width,
  },
  text: {
    color: '#FCD581',
    fontSize: 40,
    textAlign: 'center',
  },
});
export default WelcomeScreen;
