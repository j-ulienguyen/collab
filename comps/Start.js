import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image
} from 'react-native';


function Start(){
    return (
        <View>
            <Text>Welcome to Harbour Event Centre!!!!!</Text>
            <Image
                style={{width:100, height:100}}
                source={{uri: 'http://es.clubzone.com/content/uploads/places/148783/2.jpg'
                }}
            />
        </View>
    )
}








export default Start;
