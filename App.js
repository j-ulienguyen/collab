/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View,Text} from 'react-native';
import End from './comps/End';
import styles from './styles/AppStyles';

function App(){
	// UI
	return (
		<View style={styles.app}>
			<Text>Hello</Text>
			<End/>
		</View>
	)
}

export default App;
