import React from 'react';
import {Provider} from 'react-redux';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import store from './store/store';
import MainStackNavigation from './navigation/MainStackNavigation';
import MainBottomNavigation from './features/Contact/navigation/MainBottomNavigation';

export default () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <Provider store={store}>
      <ApplicationProvider {...eva} theme={eva.light}>
        {/* <MainStackNavigation /> */}
        <MainBottomNavigation />
      </ApplicationProvider>
    </Provider>
  </>
);
