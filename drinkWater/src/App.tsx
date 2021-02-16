import React from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import AppContainer from './Navigation';
import { persistor, store } from './store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SafeAreaView style={{ flex: 1 }}>
          <AppContainer />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};

export default App;
