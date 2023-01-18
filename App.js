import { StyleSheet, Text, ScrollView, View, Dimensions, Button, Image, ImageBackground, StatusBar, TouchableHighlight, Animated, TouchableOpacity } from 'react-native';
import { Shadow } from 'react-native-shadow-2';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { Asset } from 'expo-asset';
import { Constants } from 'expo';
{/*import { BlurView } from "@react-native-community/blur";*/ }
import { DefaultTheme, NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';


import HeaderArt from './assets/images/header_art.svg';
import HeaderLogo from './assets/images/header_logo.svg';
import MMButton1 from './assets/images/mm_home.svg';
import MMButton2 from './assets/images/mm_compendium.svg';
import MMButton3 from './assets/images/mm_ds.svg';
import MMButton4 from './assets/images/mm_community.svg';
import MMButton5 from './assets/images/mm_settings.svg';
import MMSepV from './assets/images/utility_sepv.svg';

import ScreenHome from './App_ScreenHome';
import ScreenCompendium from './App_ScreenCompendium';
import ScreenDS from './App_ScreenDS';
import ScreenCommunity from './App_ScreenCommunity';
import ScreenSettings from './App_ScreenSettings';

import styles from './Styles'

SplashScreen.preventAutoHideAsync();

const proportion80 = '80%';
const proportion50 = '50%';

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

function MainMenuProps({ state, descriptors, navigation, position }) {
  return (

    <View style={{
      flexDirection: 'row',
      borderColor: 'white',
      shadowColor: 'white',
      /*elevation: 0.35,*/
      overflow: 'hidden',
      alignContent: 'stretch',
      justifyContent: 'space-evenly', marginTop: 1,
    }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const inputRange = state.routes.map((_, i) => i);
        const opacity = position.interpolate({
          inputRange,
          outputRange: inputRange.map(i => (i === index ? 1 : 0)),
        });

        function btn() {
          if (index == 0 & !isFocused) return (<View style={styles.mmbutton}><MMButton1 /></View>)
          if (index == 0 & isFocused) return (<View style={styles.mmbutton}><MMButton1 /><Image source={{ uri: Asset.fromModule(require("./assets/images/mm_glow.png")).uri, }} style={styles.mmbuttonGlow} /></View>)
          if (index == 1 & !isFocused) return (<View style={styles.mmbutton}><MMButton2 /></View>)
          if (index == 1 & isFocused) return (<View style={styles.mmbutton}><MMButton2 /><Image source={{ uri: Asset.fromModule(require("./assets/images/mm_glow.png")).uri, }} style={styles.mmbuttonGlow} /></View>)
          if (index == 2 & !isFocused) return (<View style={styles.mmbutton}><MMButton3 /></View>)
          if (index == 2 & isFocused) return (<View style={styles.mmbutton}><MMButton3 /><Image source={{ uri: Asset.fromModule(require("./assets/images/mm_glow.png")).uri, }} style={styles.mmbuttonGlow} /></View>)
          if (index == 3) return (<View style={styles.mmbuttonInactive}><MMButton4 /></View>)
          if (index == 4 & !isFocused) return (<View style={styles.mmbutton}><MMButton5 /></View>)
          if (index == 4 & isFocused) return (<View style={styles.mmbutton}><MMButton5 /><Image source={{ uri: Asset.fromModule(require("./assets/images/mm_glow.png")).uri, }} style={styles.mmbuttonGlow} /></View>)
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.MainMenuButtonLegit}
          >
            {btn()}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const MainMenu = createMaterialTopTabNavigator();


function App({ }) {

  const [fontsLoaded] = useFonts({
    'AlegreyaSansLight': require('./assets/fonts/AlegreyaSans-Light.ttf'),
    'AlegreyaSansRegular': require('./assets/fonts/AlegreyaSans-Regular.ttf'),
    'AlegreyaSansBold': require('./assets/fonts/AlegreyaSans-Bold.ttf'),
    'OpenSansLight': require('./assets/fonts/OpenSans-Light.ttf'),
    'OpenSansRegular': require('./assets/fonts/OpenSans-Regular.ttf'),
    'OpenSansItalic': require('./assets/fonts/OpenSans-Italic.ttf'),
    'OpenSansBold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }


  return (

    <View style={styles.background} onLayout={onLayoutRootView} >

      <NavigationContainer theme={navTheme}>

        <StatusBar style={'auto'}></StatusBar>

        {/*<<LinearGradient colors={['rgba(27,25,25,1)', 'rgba(66,66,66,1)']} style={styles.background} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} />
        ImageBackground source={{ uri: Asset.fromModule(require("./assets/images/bg_test5.png")).uri, }} style={styles.bgimage} />*/}

        <View style={styles.HeaderFull}>
          <LinearGradient colors={['rgba(246,246,246,0.25)', 'rgba(116,116,116,0.25)']} style={styles.HeaderBack} start={{ x: 0, y: 1 }} end={{ x: 0, y: 0 }} />
          <HeaderArt style={styles.HeaderArt} />
          <HeaderLogo style={styles.HeaderLogo} />
        </View>

        <Shadow><View style={{ position: 'absolute', height: 51 }}></View></Shadow>

        <MainMenu.Navigator backBehavior={'none'} tabBar={props => <MainMenuProps {...props} />}>
          <MainMenu.Screen name="Screen1" component={ScreenHome} options={{ animationEnabled: false, swipeEnabled: false, key: '1', presentation: 'containedtransparentModal' }} />
          <MainMenu.Screen name="Screen2" component={ScreenCompendium} options={{ animationEnabled: false, swipeEnabled: false, key: '2', presentation: 'containedtransparentModal' }} />
          <MainMenu.Screen name="Screen3" component={ScreenDS} options={{ animationEnabled: false, swipeEnabled: false, key: '3', presentation: 'containedtransparentModal' }} />
          <MainMenu.Screen name="Screen4" component={ScreenCommunity} options={{ animationEnabled: false, swipeEnabled: false, key: '4', presentation: 'containedtransparentModal' }} />
          <MainMenu.Screen name="Screen5" component={ScreenSettings} options={{ animationEnabled: false, swipeEnabled: false, key: '5', presentation: 'containedtransparentModal' }} />
        </MainMenu.Navigator>
      </NavigationContainer>

    </View>

  );
};

export default App;