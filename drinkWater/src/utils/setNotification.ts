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
export const setNotification = () => {
  PushNotification.createChannel(
    {
      channelId: '3',
      channelName: 'My channel',
    },
    () => {},
  );
  PushNotification.localNotificationSchedule({
    message: 'Drink some water :)',
    date: new Date(Date.now() + 2 * 360 * 1000),
    channelId: '3',
  });
};
