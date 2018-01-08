import React from 'react';
import {
  AppRegistry
} from 'react-native';

import { StackNavigator } from 'react-navigation';

import  ChatScreen  from './ChatScreen.js';
import HomeScreen from './HomeScreen.js'


const FirstProject = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen },
});


AppRegistry.registerComponent('AwesomeProject', () => FirstProject);
