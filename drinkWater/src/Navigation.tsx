import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import Home from './screens/Home';
import SignIn from './screens/SignIn';
import WelcomeScreen from './screens/WelcomeScreen';

const Stack = createStackNavigator();

const AppContainer = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name={'Welcome'} component={WelcomeScreen} />
      <Stack.Screen name={'SignIn'} component={SignIn} />
      <Stack.Screen name={'Home'} component={Home} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppContainer;
