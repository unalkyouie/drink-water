import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import React, { useEffect } from 'react';
import { View } from 'react-native';

const WelcomeScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    auth().onAuthStateChanged((user) => {
      navigation.navigate(user ? 'Main' : 'SignUp');
    });
  }, []);

  return <View style={{ backgroundColor: 'red', height: 200 }} />;
};

export default WelcomeScreen;
