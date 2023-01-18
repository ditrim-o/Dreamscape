import { StyleSheet, Text, ScrollView, View, Dimensions, Button, Image, ImageBackground, StatusBar, TouchableHighlight, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import { useWindowDimensions } from 'react-native';
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import { Shadow } from 'react-native-shadow-2';

{/*import { BlurView } from "@react-native-community/blur";*/ }

import DropDownPicker from 'react-native-dropdown-picker';
import Checkbox from 'expo-checkbox';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import styles from './Styles'
import ScreenHomeList from './App_ScreenHome_List';
import ScreenHomeAddDream from './App_ScreenHome_NewDream';
import ScreenHomeTags from './App_ScreenHome_Tags';

import HButtonAdd from './assets/images/home_add_small.svg';
import HButtonList from './assets/images/home_list_small.svg';
import HButtonDreambox from './assets/images/home_dreambox_small.svg'
import HButtonTags from './assets/images/home_tags_small.svg';

import IconUncomplete from './assets/images/list_depleted.svg';

import BtnDreamEdit from './assets/images/icon_edit.svg';
import BtnAddByRead from './assets/images/icon_addbyread.svg';
import BtnShare from './assets/images/icon_share.svg';
import BtnDelete from './assets/images/icon_delete.svg';
import SepH from './assets/images/utility_seph.svg';

import TagSpecial from './assets/images/tag_special.svg';
import TagLocation from './assets/images/tag_location.svg';
import TagCharacter from './assets/images/tag_character.svg';

import SeacrhBarAdd from './assets/images/icon_search.svg';
import SeacrhBarSearch from './assets/images/icon_search.svg';



const wwidth = Dimensions.get("window").width;
const wheight = Dimensions.get("window").height;

const ListSideMenu = createDrawerNavigator();
const Stack = createStackNavigator();

export default function ScreenHome({ navigation }) {

  return (

    <View style={{ height: wheight - 100, marginTop: 1, }}>
      <ListSideMenu.Navigator initialRouteName="Home" screenOptions={
        {
          drawerStyle: { backgroundColor: 'rgba(34, 34, 34, 0.9)', width: wwidth * 4 / 5, },
          headerShown: 0,
        }} drawerContent={(props) => <CustomDrawerContent {...props} />}>
        <Stack.Screen name="Home" component={ScreenHomeHome} options={{ drawerLabel: () => null, swipeEnabled: false }} />
        <Stack.Screen name="List" component={ScreenHomeList} options={{ drawerLabel: () => null }} />
        <Stack.Screen name="Add" component={ScreenHomeAddDream} options={{ drawerLabel: () => null, swipeEnabled: false }} />
        <Stack.Screen name="Tags" component={ScreenHomeTags} options={{ drawerLabel: () => null, swipeEnabled: false }} />
      </ListSideMenu.Navigator>
    </View>

  )
};

function ScreenHomeHome({ navigation }) {

  const [SearchString, setSearchString] = useState('');

  return (
    <View style={styles.body_home}>

      <View style={styles.home_buttons}>
        <TouchableOpacity onPress={() => navigation.navigate('Add')}>
          <View style={styles.homemenu_button}>
            <HButtonAdd /><Text style={styles.homemenu_button_text}>Add new dream</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.homemenu_button}>
            <HButtonDreambox /><Text style={styles.homemenu_button_text}>Dreambox</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('List')}>
          <View style={styles.homemenu_button}>
            <HButtonList /><Text style={styles.homemenu_button_text}>Dream list</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Tags')}>
          <View style={styles.homemenu_button}>
            <HButtonTags /><Text style={styles.homemenu_button_text}>Explore Tags</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.sepv}></View>

      <ScrollView style={styles.home_widgetarea}>

        <Text style={styles.tags_newtag_window_header}>[widget area]</Text>

      </ScrollView>

    </View>
  );
}

function CustomDrawerContent({ navigation }) {

  const [open_TimeRange, setOpen_TimeRange] = useState(false);
  const [value_TimeRange, setValue_TimeRange] = useState('1');
  const [items_TimeRange, setItems_TimeRange] = useState([
    { label: 'All dreams', value: '1' },
    { label: 'This day', value: '2' },
    { label: 'This week', value: '3' },
    { label: 'This month', value: '4' },
    { label: '[calendar picked d/w/m]', value: '5' }
  ]);

  const [open_ShowByType, setOpen_ShowByType] = useState(false);
  const [value_ShowByType, setValue_ShowByType] = useState('1');
  const [items_ShowByType, setItems_ShowByType] = useState([
    { label: 'All dreams', value: '1' },
    { label: 'Common', value: '2' },
    { label: 'Lucid', value: '3'/*, labelStyle: {color: "#8dd5ff"}*/ },
    { label: 'Awared', value: '4'/*, labelStyle: {color: "#8fcc6e"}*/ },
    { label: 'Uncommon', value: '5' }
  ]);

  const [open_ShowByImportancy, setOpen_ShowByImportancy] = useState(false);
  const [value_ShowByImportancy, setValue_ShowByImportancy] = useState('1');
  const [items_ShowByImportancy, setItems_ShowByImportancy] = useState([
    { label: 'All dreams', value: '1' },
    { label: 'Flood', value: '2' },
    { label: 'Common', value: '3' },
    { label: 'Interesting', value: '4' },
    { label: 'Important', value: '5' }
  ]);




  return (

    <View style={styles.sidemenucore}>

      {/*<BlurView style={styles.absolute} blurType="light" blurAmount={10} />*/}


      <View style={{ height: wheight - 225, }} >

        <ScrollView>


          <View style={styles.adddream_option}>
            <View style={styles.adddream_options_note}><Text style={styles.home_list_desc}>Time range</Text></View>
            <DropDownPicker
              listMode="SCROLLVIEW" theme="DARK"
              style={styles.adddream_dropdown}
              dropDownContainerStyle={styles.adddream_dropdown_open}
              textStyle={{ fontFamily: 'AlegreyaSansRegular', fontSize: 18, color: 'white', }}
              open={open_TimeRange} setOpen={setOpen_TimeRange}
              value={value_TimeRange} setValue={setValue_TimeRange}
              items={items_TimeRange} setItems={setItems_TimeRange}
              zIndex={5000}
            />
          </View>

          <View style={styles.adddream_option}>
            <View style={styles.adddream_options_note}><Text style={styles.home_list_desc}>Show by type</Text></View>
            <DropDownPicker
              listMode="SCROLLVIEW" theme="DARK"
              style={styles.adddream_dropdown}
              dropDownContainerStyle={styles.adddream_dropdown_open}
              textStyle={{ fontFamily: 'AlegreyaSansRegular', fontSize: 18, color: 'white', }}
              open={open_ShowByType} setOpen={setOpen_ShowByType}
              value={value_ShowByType} setValue={setValue_ShowByType}
              items={items_ShowByType} setItems={setItems_ShowByType}
              zIndex={4000}
            />
          </View>

          <View style={styles.adddream_option}>
            <View style={styles.adddream_options_note}><Text style={styles.home_list_desc}>Show by importancy</Text></View>
            <DropDownPicker
              listMode="SCROLLVIEW" theme="DARK"
              style={styles.adddream_dropdown}
              dropDownContainerStyle={styles.adddream_dropdown_open}
              textStyle={{ fontFamily: 'AlegreyaSansRegular', fontSize: 18, color: 'white', }}
              open={open_ShowByImportancy} setOpen={setOpen_ShowByImportancy}
              value={value_ShowByImportancy} setValue={setValue_ShowByImportancy}
              items={items_ShowByImportancy} setItems={setItems_ShowByImportancy}
              zIndex={2800}
            />
          </View>

          <View style={styles.checkbox_item}>
            <Checkbox
              style={styles.checkbox}
              value={false}
              color={'rgba(180,180,180,0.8)'}
            />
            <Text style={styles.settings_item_optiontext}>Show incomplete (<View style={styles.tags_list_iconu_noshade}><IconUncomplete /></View>) only</Text>
          </View>

          <View style={{ minHeight: 200, }}></View>
        </ScrollView>

      </View>


      <View>
        <View style={styles.seph}></View>
        <View style={styles.sidemenu_buttonfield}>
          <View style={styles.home_buttons_sidemenu}>
            <HButtonAdd onPress={() => navigation.navigate('Add')} /><Text style={styles.home_buttons_sidemenu_text}>Add new dream</Text>
          </View>
          <View style={styles.home_buttons_sidemenu}>
            <HButtonDreambox /><Text style={styles.home_buttons_sidemenu_text}>Dreambox</Text>
          </View>
          <View style={styles.home_buttons_sidemenu}>
            <HButtonTags onPress={() => navigation.navigate('Tags')} /><Text style={styles.home_buttons_sidemenu_text}>Explore Tags</Text>
          </View>
        </View>
      </View>



    </View>

  );
}