import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';

import LogInForm from '../components/LogInForm';
import { logIn } from '../reducers/authReducer';
import { AppDispatch } from '../store';

const SignInScreen = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch<AppDispatch>();
  const handleSubmitPress = () => {
    dispatch(logIn());
    navigation.navigate('Home');
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
      }}>
      <LogInForm handleSubmit={handleSubmitPress} />
    </View>
  );
};

export default SignInScreen;
