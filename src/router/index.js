import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SplashScreen, GetStarted, SignIn, SignUp, Beranda, Home, Reports, Profile } from '../pages';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigator } from '../components';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const mainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Reports" component={Reports} />
      <Tab.Screen name="Profile" component={Profile}  />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown: false}}  />
      <Stack.Screen name="GetStarted" component={GetStarted} options={{headerShown: false}} />
      <Stack.Screen name="SignIn" component={SignIn} options={{headerShown: false}} />
      <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}} />
      <Stack.Screen name="Beranda" component={Beranda} options={{headerShown: false}} />
      <Stack.Screen name="mainApp" component={mainApp} options={{headerShown: false}} />
    </Stack.Navigator>
  );
};

export default Router;
