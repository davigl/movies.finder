import React from 'react';
import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';

import Styles from '~/assets/styles';
import { persistor, store } from '~/redux/store';
import ProjectRoutes from '~/routes';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ProjectRoutes />
        <Styles />
      </PersistGate>
    </Provider>
  );
}

export default App;
