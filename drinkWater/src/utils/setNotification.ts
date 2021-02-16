import PushNotification from 'react-native-push-notification';

PushNotification.configure({
  onRegister: function (token) {
    console.log('TOKEN:', token);
  },
  onNotification: function (notification) {
    console.log('NOTIFICATION:', notification);
  },
  popInitialNotification: true,
  requestPermissions: true,
});
PushNotification.createChannel(
  {
    channelId: '3',
    channelName: 'My channel',
  },
  () => {},
);
export const setNotification = () => {
  PushNotification.localNotificationSchedule({
    message: 'Drink some water :)',
    date: new Date(Date.now() + 60 * 1000),
    channelId: '3',
  });
};
PushNotification.deleteChannel('3');
