import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import {createBottomTabNavigator} from 'react-navigation-Tabs';
//import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import feed from './app/screens/feed';
import profile from './app/screens/profile';
import upload from './app/screens/upload';
/*const NavigationStack = createStackNavigator({
    Feed:{screen:feed},
    Upload:{screen:upload},
    Profile:{screen: profile}
  });

  const Stack = createStackNavigator();
*/
const TabNavigator = createBottomTabNavigator({
  Feed:{screen:feed},
    Upload:{screen:upload},
    Profile:{screen: profile},
});
const Stack = createAppContainer(TabNavigator);

export default function App() {
  return (
    <Stack />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
