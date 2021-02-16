import React, { useRef, useState } from 'react';
import { View, KeyboardAvoidingView, Keyboard } from 'react-native';
import { useDispatch } from 'react-redux';
import { isLoggingIn } from '../reducers/authReducer';
import { AppDispatch } from '../store';

import { handleLogin } from '../utils/handleLogin';
import Button from './Button';
import Input from './Input';

interface Props {
  handleSubmit: () => void;
}

const LogInForm: React.FC<Props> = ({ handleSubmit }) => {
  const dispatch = useDispatch<AppDispatch>();
  const passwordInputRef = useRef();
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  return (
    <KeyboardAvoidingView enabled>
      <View style={{ alignItems: 'center' }}></View>
      <Input
        onChangeText={(value) => setUserEmail(value)}
        onSubmitEditing={() =>
          passwordInputRef.current && passwordInputRef.current.focus()
        }
        type={'e-mail'}
      />
      <Input
        onChangeText={(value) => setUserPassword(value)}
        onSubmitEditing={Keyboard.dismiss}
        type={'password'}
        ref={passwordInputRef}
      />
      <Button
        title={'LOGIN'}
        onPress={() => {
          dispatch(isLoggingIn());
          userEmail &&
            userPassword &&
            handleLogin(userEmail, userPassword, handleSubmit);
        }}
        type="default"
        disabled={false}
      />
    </KeyboardAvoidingView>
  );
};

export default LogInForm;
