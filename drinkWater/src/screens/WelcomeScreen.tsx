import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ActivityIndicator, Dimensions, StyleSheet, Text } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';

import { AppState } from '../reducers';

const { height, width } = Dimensions.get('window');

const WelcomeScreen = () => {
  const navigation = useNavigation();
  const isLogged = useSelector<AppState, boolean>((state) => state.auth.isAuth);
  const isLoading = useSelector<AppState, boolean>(
    (state) => state.auth.isLoading,
  );
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
