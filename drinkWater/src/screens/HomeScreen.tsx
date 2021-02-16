import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../components/Button';
import { AppState } from '../reducers';
import { isLoggedOut, isLoggingIn, logIn } from '../reducers/authReducer';
import { setReminderTime } from '../reducers/reminderReducer';
import { AppDispatch } from '../store';
import { handleLogout } from '../utils/handleLogout';
import { setNotification } from '../utils/setNotification';

const HomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch<AppDispatch>();
  const reminderTime = useSelector<AppState, number>(
    (state) => state.reminder.timeSet,
  );
  const [currentTime, setCurrentTime] = useState(0);
  const isLoading = useSelector<AppState, boolean>(
    (state) => state.auth.isLoading,
  );
  useEffect(() => {
    setCurrentTime(new Date().getMilliseconds());
  }, []);

  const setNewNotification = () => {
    dispatch(setReminderTime());
    setNotification();
  };
  const isDisabled = currentTime < reminderTime ? true : false;
  const logOut = () => {
    navigation.navigate('Welcome');
    dispatch(isLoggedOut());
  };
  return (
    <View style={styles.container}>
      {isLoading && (
        <ActivityIndicator
          style={styles.indictator}
          size={'large'}
          color={'#FCD581'}
        />
      )}
      <Button
        onPress={setNewNotification}
        title="Remind me to drink water"
        type="reminder"
        disabled={isDisabled}
      />
      <Button
        onPress={() => {
          dispatch(isLoggingIn());
          handleLogout(logOut);
        }}
        title="Logout"
        type="default"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#307ecc',
  },
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
export default HomeScreen;
