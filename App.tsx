//@ts-nocheck
import { StyleSheet, Text, ScrollView, View, Dimensions, Button, Image, ImageBackground, StatusBar, TouchableHighlight, Animated, TouchableOpacity } from 'react-native';
import { Shadow } from 'react-native-shadow-2';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import { store } from './src/store/reducers/reducer';
import { Provider } from 'react-redux';


import HeaderArt from './assets/images/header_art.svg';
import HeaderLogo from './assets/images/header_logo.svg';
import MMSepV from './assets/images/utility_sepv.svg';

import ScreenHome from './App_ScreenHome';
import ScreenCompendium from './App_ScreenCompendium';
import ScreenDS from './App_ScreenDS';
import ScreenCommunity from './App_ScreenCommunity';
import ScreenSettings from './App_ScreenSettings';

import styles from './Styles'
import TabBar from './src/containers/TabBar/TabBar';
import HomePage from './src/containers/HomePage/HomePage';

SplashScreen.preventAutoHideAsync();

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};


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

    <Provider store={store}>
      <View style={styles.background} onLayout={onLayoutRootView} >
        <NavigationContainer theme={navTheme}>
          <StatusBar ></StatusBar>

          {/*<<LinearGradient colors={['rgba(27,25,25,1)', 'rgba(66,66,66,1)']} style={styles.background} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} />
        ImageBackground source={{ uri: Asset.fromModule(require("./assets/images/bg_test5.png")).uri, }} style={styles.bgimage} />*/}

          <View style={styles.HeaderFull}>
            <LinearGradient colors={['rgba(246,246,246,0.25)', 'rgba(116,116,116,0.25)']} style={styles.HeaderBack} start={{ x: 0, y: 1 }} end={{ x: 0, y: 0 }} />
            <HeaderArt style={styles.HeaderArt} />
            <HeaderLogo style={styles.HeaderLogo} />
          </View>

          <Shadow><View style={{ position: 'absolute', height: 51 }}></View></Shadow>

          <MainMenu.Navigator backBehavior={'none'} tabBar={props => <TabBar {...props} />}>
            <MainMenu.Screen name="Main" component={HomePage} options={{ animationEnabled: false, swipeEnabled: false, }} />
            <MainMenu.Screen name="Screen2" component={ScreenCompendium} options={{ animationEnabled: false, swipeEnabled: false }} />
            <MainMenu.Screen name="Screen3" component={ScreenDS} options={{ animationEnabled: false, swipeEnabled: false }} />
            <MainMenu.Screen name="Screen4" component={ScreenCommunity} options={{ animationEnabled: false, swipeEnabled: false }} />
            <MainMenu.Screen name="Screen5" component={ScreenSettings} options={{ animationEnabled: false, swipeEnabled: false }} />
          </MainMenu.Navigator>
        </NavigationContainer>
      </View>
    </Provider>

  );
};

export default App;