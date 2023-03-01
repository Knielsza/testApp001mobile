// import App from './apps/App01';

import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Header from "./components/Header.js"
import Content from "./components/Content.js"
import Footer from "./components/Footer.js"

export default class App extends React.Component {
  render() {
    console.log("App") // tą konsolę zobacz w przeglądarce
    return (
      <View style={styles.container}>
        <StatusBar />
        <Header />
        <Content />
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff00',
  },

});