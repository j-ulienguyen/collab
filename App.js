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
import About from './comps/About';
import Contact from './comps/contact';
import styles from './styles/AppStyles';

function App(){
	// UI
	return (
		<View style={styles.app}>
			<Text>Hello</Text>
            <About />
            <Contact />
			<End/>
		</View>
	)
}

export default App;
