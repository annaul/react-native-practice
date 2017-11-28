import React, { Component } from 'react';
import { Appregistry, StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';
import { API_KEY, AUTH_DOMAINE, DATABASE_URL, PROJECT_ID, STORAGE_BUCKET } from "react-native-dotenv"

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAINE,
  databaseURL: DATABASE_URL,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET
}
const firebaseApp = firebase.initializeApp(firebaseConfig);

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 150,
    paddingLeft: 25,
    paddingRight: 25
  },
  text: {
    fontSize: 36
  }
});
