import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props {
  onPress: () => void;
  title: string;
  type: 'default' | 'reminder';
  disabled: boolean;
}

const Button: React.FC<Props> = ({ onPress, title, type, disabled }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled}
        style={[
          styles.container,
          type === 'reminder' && styles.waterContainer,
        ]}>
        <Text>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 200,
    backgroundColor: 'red',
  },
  waterContainer: {},
  text: {},
});

export default Button;
