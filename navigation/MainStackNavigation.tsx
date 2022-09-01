import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ContactList from '../features/Contact/components/ContactList';
import ContactDetails from '../features/Contact/components/ContactDetails';

export type RootStackParamList = {
  List: {};
  Details: {id: number};
};

const {Navigator, Screen} = createNativeStackNavigator<RootStackParamList>();

const MainStackNavigation = () => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="List" component={ContactList} />
        <Screen name="Details" component={ContactDetails} />
      </Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigation;
