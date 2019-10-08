/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';
import About from './comps/About';
import styles from './styles/AppStyles';

function App() {

  return (
    <View style={styles.app}>
      <Text></Text>
      <About />
    </View>
  )

};


export default App;
