import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import RootNavigation from './src/components/navigation/RootNavigation';

const App = () => (
  // Add Redux
  <NavigationContainer>
    <RootNavigation />
  </NavigationContainer>
);

export default App;
