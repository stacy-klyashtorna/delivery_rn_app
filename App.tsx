import React from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import RootNavigation from './src/components/navigation/RootNavigation';

const App = () => (
  // Add Redux
  <NavigationContainer fallback={<Text>Loading…</Text>}>
    <RootNavigation />
  </NavigationContainer>
);

export default App;
