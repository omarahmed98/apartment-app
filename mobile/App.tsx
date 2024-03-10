import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ApartmentListingPage from './src/components/ApartmentListingPage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <ApartmentListingPage></ApartmentListingPage>
  );
};

export default App;