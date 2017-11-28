import React, { Component } from 'react';
import { Appregistry, Text, View } from 'react-native';
import styles from './app/styles';
import * as firebase from 'firebase';
import firebaseApp from './app/config/data'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { quote: 'loading' };
    firebase.database().ref('/quotes').on('value', (data) => {
      this.setState({ quote: data.val() });
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          <Text>{this.state.quote[2]['text']}</Text>
        </Text>
      </View>
    );
  }
}
