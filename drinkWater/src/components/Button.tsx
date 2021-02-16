import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props {
  onPress: () => void;
  title: string;
  type: 'default' | 'reminder';
  disabled?: boolean;
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
          disabled && { backgroundColor: 'grey', borderColor: 'grey' },
        ]}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#63B0CD',
    justifyContent: 'center',
    margin: 20,
    padding: 10,
    width: 200,
  },
  waterContainer: {
    backgroundColor: '#D52941',
    borderColor: '#990D35',
    borderRadius: 100,
    borderWidth: 20,
    height: 200,
    width: 200,
  },
  text: {
    color: '#FCD581',
    fontSize: 16,
    textAlign: 'center',
    padding: 10,
  },
});

export default Button;
