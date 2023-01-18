import { StyleSheet, Text, View, Dimensions, Button, Image, ImageBackground, StatusBar, TouchableHighlight } from 'react-native';
import React, {useState} from 'react';

import styles from './Styles'


export default function ScreenCommunity() {
  return (

    <View style={{height: Dimensions.get("screen").height - 250}}>

      <View style={{flex: 1, justifyContent: 'center', alignContent:'center', alignItems: 'center',}}>
        <Text style={styles.splashheader}>Community feature is currently inactive</Text>
        <Text style={styles.splashdesc}>If you're encouraged to see what comes next, please consider supporting Dreamscape!</Text>
      </View>

    </View>

  )
};
