import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../components/Button';
import { AppState } from '../reducers';
import { setReminderTime } from '../reducers/reminderReducer';
import { AppDispatch } from '../store';
import { setNotification } from '../utils/setNotification';

const HomeScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const reminderTime = useSelector<AppState, number>(
    (state) => state.reminder.timeSet,
  );
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    setCurrentTime(new Date().getMilliseconds());
  }, []);

  const setNewNotification = () => {
    dispatch(setReminderTime());
    setNotification();
  };
  const isDisabled = currentTime < reminderTime ? true : false;

  return (
    <View style={styles.container}>
      <Button
        onPress={setNewNotification}
        title="Remind me to drink water"
        type="reminder"
        disabled={isDisabled}
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
});
export default HomeScreen;
