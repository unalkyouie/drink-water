import React from 'react';
import { View, StyleSheet, TextInput, Dimensions } from 'react-native';

interface Props {
  onChangeText: (value: string) => void;
  onSubmitEditing: () => void;
  type: 'e-mail' | 'password';
}
const { width } = Dimensions.get('window');

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
    margin: 10,
    width: 0.8 * width,
  },
  input: {
    color: '#094D92',
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomWidth: 1,
    borderColor: '#094D92',
  },
});

export default Input;
