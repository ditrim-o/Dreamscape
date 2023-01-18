import { StyleSheet, Switch, Text, View, Dimensions, ScrollView, Button, Image, ImageBackground, StatusBar, TouchableHighlight, Animated, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Slider from '@react-native-community/slider';
import RadioGroup from 'react-native-radio-buttons-group';
import Checkbox from 'expo-checkbox';
import DropDownPicker from 'react-native-dropdown-picker';

import styles from './Styles'

const wwidth = Dimensions.get("window").width;
const wheight = Dimensions.get("window").height;

const SettingsTabs = createMaterialTopTabNavigator();


function AppSettingsMain({ }) {

  /* Buttons for "Use dream names" */
  const [radioButtons, setRadioButtons] = useState([
    {
      id: '1',
      label: 'Always',
      value: 'option1',
      labelStyle: styles.settings_item_optiontext,
      selected: 'true',
      borderColor: 'rgba(200,200,200,0.8)',
      color: 'rgba(200,200,200,0.8)',
      size: '20',
    },
    {
      id: '2',
      label: 'If specified',
      value: 'option2',
      labelStyle: styles.settings_item_optiontext,
      borderColor: 'rgba(200,200,200,0.8)',
      color: 'rgba(200,200,200,0.8)',
      size: '20',
    },
    {
      id: '3',
      label: 'No',
      value: 'option3',
      labelStyle: styles.settings_item_optiontext,
      borderColor: 'rgba(200,200,200,0.8)',
      color: 'rgba(200,200,200,0.8)',
      size: '20',
    },
  ]);
  function onPressRadioButton(radioButtonsArray) {
    setRadioButtons(radioButtonsArray);
  }

  /* Buttons for "Home/swipe widgets" */
  const [isChecked, setChecked] = useState(false);

  return (
    <View style={styles.body_settings_in}>
      <ScrollView>

        <View>
          <Text style={styles.settings_item_name}>Use dream names</Text>
          <Text style={styles.settings_item_desc}>Appearance of names in list and editing screen</Text>
          <RadioGroup
            radioButtons={radioButtons}
            onPress={onPressRadioButton}
            containerStyle={{ alignItems: 'flex-start' }}
          />
        </View>

        <View style={styles.seph}></View>

        <View style={{ alignItems: 'center', flexDirection: 'row', alignContent: 'center', justifyContent: 'flex-start', }}>
          <View style={{ flexGrow: 1, }}>
            <Text style={styles.settings_item_name}>Diary only mode</Text>
            <Text style={styles.settings_item_desc}>Sets dream list as home and offs most features</Text>
          </View>
          <Switch style={{ width: 1, }}
            trackColor={{ false: 'rgba(42,42,42,0.8)', true: 'rgba(180,180,180,0.8)' }}
            thumbColor={'rgba(200,200,200,1)'}
            value={false}
          />
        </View>

        <View style={styles.seph}></View>

        <View style={{ alignItems: 'center', flexDirection: 'row', alignContent: 'center', justifyContent: 'flex-start', }}>
          <View style={{ flexGrow: 1, }}>
            <Text style={styles.settings_item_name}>Skip dream setup notification</Text>
            <Text style={styles.settings_item_desc}>Disables dream parameters screen on save</Text>
          </View>
          <Switch
            trackColor={{ false: 'rgba(42,42,42,0.8)', true: 'rgba(180,180,180,0.8)' }}
            thumbColor={'rgba(200,200,200,1)'}
            value={false}
          />
        </View>

        <View style={styles.seph}></View>

        <View style={{ alignItems: 'center', flexDirection: 'row', alignContent: 'center', justifyContent: 'flex-start', }}>
          <View style={{ flexGrow: 1, }}>
            <Text style={styles.settings_item_name}>Use advanced dream types</Text>
            <Text style={styles.settings_item_desc}>Narrow classification for practice and stats</Text>
          </View>
          <Switch
            trackColor={{ false: 'rgba(42,42,42,0.8)', true: 'rgba(180,180,180,0.8)' }}
            thumbColor={'rgba(200,200,200,1)'}
            value={false}
          />
        </View>

        <View style={styles.seph}></View>

        <View>
          <Text style={styles.settings_item_name}>Home/swipe widgets</Text>
          <Text style={styles.settings_item_desc}>Things that may be helpful for practice</Text>
          <View style={styles.checkbox_item}>
            <Checkbox
              style={styles.checkbox}
              value={isChecked}
              onValueChange={setChecked}
              color={'rgba(180,180,180,0.8)'}
            />
            <Text style={styles.settings_item_optiontext}>Tips</Text>
          </View>
          <View style={styles.checkbox_item}>
            <Checkbox
              style={styles.checkbox}
              value={false}
              color={'rgba(180,180,180,0.8)'}
            />
            <Text style={styles.settings_item_optiontext}>Calendar</Text>
          </View>
          <View style={styles.checkbox_item}>
            <Checkbox
              style={styles.checkbox}
              value={false}
              color={'rgba(180,180,180,0.8)'}
            />
            <Text style={styles.settings_item_optiontext}>Weekly chart</Text>
          </View>
          <View style={styles.checkbox_item}>
            <Checkbox
              style={styles.checkbox}
              value={false}
              color={'rgba(180,180,180,0.8)'}
            />
            <Text style={styles.settings_item_optiontext}>Simple REM timer</Text>
          </View>
        </View>

      </ScrollView>
    </View>
  );
}

function AppSettingsInterface({ }) {

  /* Things for all sliders */
  const [ValueHue, SetValueHue] = useState(180);
  const [ValueSaturation, SetValueSaturation] = useState(100);
  const [ValueBlur, SetValueBlur] = useState(0);
  const [ValueLightness, SetValueLightness] = useState(100);

  /* Lists for fonts */
  const [openFont1, setOpenFont1] = useState(false);
  const [valueFont1, setValueFont1] = useState('1');
  const [itemsFont1, setItemsFont1] = useState([
    { label: 'Alegreya Sans', value: '1' },
    { label: 'system fonts', value: '2' },
  ]);

  const [openFont2, setOpenFont2] = useState(false);
  const [valueFont2, setValueFont2] = useState('1');
  const [itemsFont2, setItemsFont2] = useState([
    { label: 'Open Sans', value: '1' },
    { label: 'system fonts', value: '2' },
  ]);

  /* Buttons for "Background color theme" */
  const [radioButtons, setRadioButtons] = useState([
    {
      id: '1',
      label: 'Default solid',
      value: 'option1',
      labelStyle: styles.settings_item_optiontext,
      selected: 'true',
      borderColor: 'rgba(200,200,200,0.8)',
      color: 'rgba(200,200,200,0.8)',
      size: '20',
    },
    {
      id: '2',
      label: 'Default gradient',
      value: 'option1',
      labelStyle: styles.settings_item_optiontext,
      borderColor: 'rgba(200,200,200,0.8)',
      color: 'rgba(200,200,200,0.8)',
      size: '20',
    },
    {
      id: '3',
      label: 'Dreamscape colorful',
      value: 'option2',
      labelStyle: styles.settings_item_optiontext,
      borderColor: 'rgba(200,200,200,0.8)',
      color: 'rgba(200,200,200,0.8)',
      size: '20',
    },
    {
      id: '4',
      label: 'Custom image',
      value: 'option3',
      labelStyle: styles.settings_item_optiontext,
      borderColor: 'rgba(200,200,200,0.8)',
      color: 'rgba(200,200,200,0.8)',
      size: '20',
    },
  ]);
  function onPressRadioButton(radioButtonsArray) {
    setRadioButtons(radioButtonsArray);
  }

  return (
    <View style={styles.body_settings_in}>
      <ScrollView>

        <Text style={styles.settings_item_name}>Primary font</Text>
        <DropDownPicker
          listMode="SCROLLVIEW" theme="DARK"
          style={styles.adddream_dropdown}
          dropDownContainerStyle={styles.adddream_dropdown_open}
          textStyle={{ fontFamily: 'AlegreyaSansRegular', fontSize: 18, color: 'white', }}
          open={openFont1} setOpen={setOpenFont1}
          value={valueFont1} setValue={setValueFont1}
          items={itemsFont1} setItems={setItemsFont1}
          zIndex={2000}
        />

        <Text style={styles.settings_item_name}>Secondary font</Text>
        <DropDownPicker
          listMode="SCROLLVIEW" theme="DARK"
          style={styles.adddream_dropdown}
          dropDownContainerStyle={styles.adddream_dropdown_open}
          textStyle={{ fontFamily: 'AlegreyaSansRegular', fontSize: 18, color: 'white', }}
          open={openFont2} setOpen={setOpenFont2}
          value={valueFont2} setValue={setValueFont2}
          items={itemsFont2} setItems={setItemsFont2}
          zIndex={1000}
        />

        <View style={styles.seph}></View>

        <Text style={styles.settings_item_name}>Background color theme</Text>

        <RadioGroup
          radioButtons={radioButtons}
          onPress={onPressRadioButton}
          containerStyle={{ alignItems: 'flex-start' }}
        />

        {/* If colorful */}

        <Text style={styles.settings_item_desc}>Hue | {ValueHue}</Text>
        <Slider
          style={{ height: 40 }}
          minimumValue={0}
          maximumValue={360}
          step={1}
          minimumTrackTintColor="rgba(200,200,200,1)"
          maximumTrackTintColor="rgba(200,200,200,1)"
          thumbTintColor="white"
          value={ValueHue}
          onValueChange={(value) => SetValueHue(value)}
        />
        <Text style={styles.settings_item_desc}>Saturation | {ValueSaturation}</Text>
        <Slider
          style={{ height: 40 }}
          minimumValue={0}
          maximumValue={120}
          step={1}
          minimumTrackTintColor="rgba(200,200,200,1)"
          maximumTrackTintColor="rgba(200,200,200,1)"
          thumbTintColor="white"
          value={ValueSaturation}
          onValueChange={(value) => SetValueSaturation(value)}
        />

        {/* If background */}

        <Text style={styles.settings_item_desc}>Blur | {ValueBlur}</Text>
        <Slider
          style={{ height: 40 }}
          minimumValue={0}
          maximumValue={100}
          step={1}
          minimumTrackTintColor="rgba(200,200,200,1)"
          maximumTrackTintColor="rgba(200,200,200,1)"
          thumbTintColor="white"
          value={ValueBlur}
          onValueChange={(value) => SetValueBlur(value)}
        />
        <Text style={styles.settings_item_desc}>Lightness | {ValueLightness}</Text>
        <Slider
          style={{ height: 40 }}
          minimumValue={0}
          maximumValue={100}
          step={1}
          minimumTrackTintColor="rgba(200,200,200,1)"
          maximumTrackTintColor="rgba(200,200,200,1)"
          thumbTintColor="white"
          value={ValueLightness}
          onValueChange={(value) => SetValueLightness(value)}
        />

      </ScrollView>
    </View>
  );
}

function AppSettingsProfile({ }) {
  return (
    <View style={styles.body_settings_in}>
      <Text style={styles.splashheader}>profile settings</Text>
    </View>
  );
}

function AppSettingsFeatures({ }) {
  return (
    <View style={styles.body_settings_in}>
      <Text style={styles.splashheader}>features settings</Text>
    </View>
  );
}


export default function ScreenSettings() {
  return (

    <View style={styles.body_settings}>

      <SettingsTabs.Navigator screenOptions={{
        tabBarStyle: { height: wwidth * 0.1, backgroundColor: 'transparent', padding: 0, margin: 0, marginTop: -10, },
        tabBarLabelStyle: { textTransform: 'capitalize', color: 'white', fontFamily: 'AlegreyaSansBold', fontSize: 16, },
        tabBarIndicatorStyle: { backgroundColor: 'white' },
      }} backBehavior={'none'} >
        <SettingsTabs.Screen name="Main" component={AppSettingsMain} />
        <SettingsTabs.Screen name="Interface" component={AppSettingsInterface} />
        <SettingsTabs.Screen name="Profile" component={AppSettingsProfile} screenOptions={{}} />
        <SettingsTabs.Screen name="Features" component={AppSettingsFeatures} />
      </SettingsTabs.Navigator>

    </View>

  )
};

