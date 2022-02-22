import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import NavigationStack from './src/navigation/homeStack';
import store, { persistor } from './src/store/store';

const App = () => {
  return(
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationStack />
      </PersistGate>
    </Provider>
  ) ;
  
  
};

export default App;
