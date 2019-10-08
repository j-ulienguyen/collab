import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from '../styles/EndStyles';

function End(){
    // UI
    return (
        <View style={styles.end}>
            <Text style={styles.introHeading}>Ending Component</Text>
            <Text style={styles.introText}>Look at this beautiful doggo</Text>
            <Image
                style = {styles.endImage}
                resizeMode = "cover"
                source = {{uri: 'https://www.abc.net.au/news/image/11019006-3x2-700x467.jpg'}}
            />
        </View>
    )
}

export default End;