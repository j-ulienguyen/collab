import React from 'react';
import {View,Text} from 'react-native';
import Start from './comps/Start'
import End from './comps/End';
import About from './comps/About';
import Contact from './comps/contact';
import styles from './styles/AppStyles';

function App(){
	// UI
	return (
		<View style={styles.app}>
			<Text>Hello</Text>
            <Start/>
            <About />
            <Contact />
			<End/>
		</View>
	)
}

export default App;
