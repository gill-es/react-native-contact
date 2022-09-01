import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createBottomTabNavigator,
  BottomTabBarProps,
} from '@react-navigation/bottom-tabs';
import {BottomNavigation, BottomNavigationTab} from '@ui-kitten/components';
import ContactList from '../components/ContactList';
import ContactDetails from '../components/ContactDetails';

type RootStackParamList = {
  List: {};
  New: {};
};

const {Navigator, Screen} = createBottomTabNavigator<RootStackParamList>();

const BottomTabBar = ({navigation, state}: BottomTabBarProps) => {
  return (
    <BottomNavigation
      selectedIndex={state.index}
      onSelect={index => navigation.navigate(state.routeNames[index])}>
      <BottomNavigationTab title="List" />
      <BottomNavigationTab title="New" />
    </BottomNavigation>
  );
};

const MainBottomNavigation = () => {
  return (
    <NavigationContainer>
      <Navigator
        tabBar={(props: BottomTabBarProps) => <BottomTabBar {...props} />}>
        <Screen name="List" component={ContactList} />
        <Screen name="New" component={ContactDetails} />
      </Navigator>
    </NavigationContainer>
  );
};

export default MainBottomNavigation;
