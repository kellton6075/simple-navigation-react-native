import {
  AppRegistry,
  Text,
  View,
} from 'react-native';
import React from 'react';
 import { StackNavigator } from 'react-navigation';

export default class ChatScreen extends React.Component {
  static navigationOptions = {
    title: 'Chat with S',
  };
  render() {
    return (
      <View>
        <Text>Chat with S</Text>
      </View>
    );
  }
}
