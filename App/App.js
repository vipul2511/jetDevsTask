import React from 'react';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {ReduxNetworkProvider} from 'react-native-offline';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from '../App/Navigators/AppNavigator';
import {initStore, initPersistor} from './redux/store';
const store = initStore();
const persistor = initPersistor(store);
function App() {
  return (
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <ReduxNetworkProvider>
          <NavigationContainer>
            <SafeAreaView style={{flex: 1}}>
              <AppNavigator />
            </SafeAreaView>
          </NavigationContainer>
        </ReduxNetworkProvider>
      </Provider>
    </PersistGate>
  );
}

export default App;
