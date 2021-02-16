import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

interface Props {
  onChangeText: (value: string) => void;
  onSubmitEditing: () => void;
  type: 'e-mail' | 'password';
}

const Input: React.FC<Props> = ({ onChangeText, onSubmitEditing, type }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={(value) => onChangeText(value)}
        placeholder={type === 'e-mail' ? 'Enter Email' : 'Eneter Password'}
        placeholderTextColor="black"
        autoCapitalize="none"
        keyboardType={type === 'e-mail' ? 'email-address' : 'default'}
        returnKeyType="next"
        onSubmitEditing={onSubmitEditing}
        underlineColorAndroid="#f000"
        blurOnSubmit={false}
        secureTextEntry={type === 'password' ? true : false}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  input: {
    color: 'black',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: 'black',
  },
});

export default Input;
