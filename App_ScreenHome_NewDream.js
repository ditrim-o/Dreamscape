import { StyleSheet, Text, View, Dimensions, Button, Image, Modal, ImageBackground, StatusBar, TouchableHighlight, TextInput, TouchableOpacity, Animated } from 'react-native';
import React, { useState, Component } from 'react';
import InputScrollView from 'react-native-input-scroll-view';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Asset } from 'expo-asset';
import { ScrollView } from 'react-native-gesture-handler';
import { rgbaColor } from '@shopify/react-native-skia';

import styles from './Styles'

import Slider from '@react-native-community/slider';
import RadioGroup from 'react-native-radio-buttons-group';
import Checkbox from 'expo-checkbox';
import DropDownPicker from 'react-native-dropdown-picker';

import AddButtonNext from './assets/images/add_addnext.svg';
import AddButtonSave from './assets/images/add_save.svg';
import AddButtonText from './assets/images/add_text.svg';
import AddButtonSettings from './assets/images/add_properties.svg';

import IconUncomplete from './assets/images/icon_q.svg';
import IconRemove from './assets/images/tag_close.svg';

import TagSpecial from './assets/images/tag_special.svg';
import TagLocation from './assets/images/tag_location2.svg';
import TagCharacter from './assets/images/tag_character2.svg';


const wwidth = Dimensions.get("window").width;
const wheight = Dimensions.get("window").height;

const DreamSettings = createMaterialTopTabNavigator();

function DreamAddScreen({ }) {

  const [DreamName, setDreamName] = useState('');
  const [number, onChangeNumber] = React.useState(null);
  const [value, onChangeText2] = React.useState('');

  return (
    <View style={styles.body_adddream}>
      <View>

        <TextInput
          style={styles.adddream_inputName}
          value={DreamName}
          onChangeText={(DreamName) => setDreamName(DreamName)}
          placeholder={'Enter dream name...'}
          placeholderTextColor={'rgba(200,200,200,0.35)'}
          cursorColor={'white'}
        />

        <TextInput
          multiline={true}
          numberOfLines={10}
          placeholder={'Content...'}
          placeholderTextColor={'rgba(200,200,200,0.35)'}
          style={styles.adddream_inputContent}
        />


      </View>
    </View>
  );
}

function DreamSettingsScreen({ }) {

  const [modalQVisible, setModalQVisible] = useState(false);

  const [radioButtons, setRadioButtons] = useState([
    {
      id: '1',
      label: 'Tonight',
      value: 'option1',
      labelStyle: styles.settings_item_optiontext,
      selected: 'true',
      borderColor: 'rgba(200,200,200,0.8)',
      color: 'rgba(200,200,200,0.8)',
      size: '20',
    },
    {
      id: '2',
      label: 'Specific date',
      value: 'option2',
      labelStyle: styles.settings_item_optiontext,
      borderColor: 'rgba(200,200,200,0.8)',
      color: 'rgba(200,200,200,0.8)',
      size: '20',
    },
    {
      id: '3',
      label: 'Unknown',
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

  const [openImportancy, setOpenImportancy] = useState(false);
  const [valueImportancy, setValueImportancy] = useState('1');
  const [itemsImportancy, setItemsImportancy] = useState([
    { label: 'Unspecified', value: '1' },
    { label: 'Flood', value: '2' },
    { label: 'Common', value: '3' },
    { label: 'Interesting', value: '4' },
    { label: 'Important', value: '5' }
  ]);

  const [openDreamtype, setOpenDreamtype] = useState(false);
  const [valueDreamtype, setValueDreamtype] = useState('1');
  const [itemsDreamtype, setItemsDreamtype] = useState([
    { label: 'Unspecified', value: '1' },
    { label: 'Common', value: '2' },
    { label: 'Lucid', value: '3' },
    { label: 'Awared', value: '4' },
    { label: 'Uncommon', value: '5' }
  ]);

  return (
    <View style={styles.body_adddream_options}>
      <ScrollView>


        <View style={styles.adddream_option}>
          <View style={styles.adddream_options_note}><Text style={styles.home_list_desc}>Date dreamt</Text></View>
          <RadioGroup
            radioButtons={radioButtons}
            onPress={onPressRadioButton}
            containerStyle={{ flexDirection: 'row', alignItems: 'flex-start', }}
          />
          <Text style={styles.tagwrap_text}>[date pick]</Text>
        </View>

        <View style={styles.adddream_option}>
          <View style={styles.adddream_options_note}><Text style={styles.home_list_desc}>Importancy</Text><View style={styles.tags_list_iconu}><IconUncomplete /></View></View>
          <DropDownPicker
            listMode="SCROLLVIEW" theme="DARK"
            style={styles.adddream_dropdown}
            dropDownContainerStyle={styles.adddream_dropdown_open}
            textStyle={{ fontFamily: 'AlegreyaSansRegular', fontSize: 18, color: 'white', }}
            open={openImportancy} setOpen={setOpenImportancy}
            value={valueImportancy} setValue={setValueImportancy}
            items={itemsImportancy} setItems={setItemsImportancy}
            zIndex={2000}
          />
        </View>

        <View style={styles.adddream_option}>
          <View style={styles.adddream_options_note}><Text onPress={() => setModalQVisible(true)} style={styles.home_list_desc}>Dream type</Text><View style={styles.tags_list_iconu}><IconUncomplete /></View></View>
          <DropDownPicker
            listMode="SCROLLVIEW" theme="DARK"
            style={styles.adddream_dropdown}
            dropDownContainerStyle={styles.adddream_dropdown_open}
            textStyle={{ fontFamily: 'AlegreyaSansRegular', fontSize: 18, color: 'white', }}
            open={openDreamtype} setOpen={setOpenDreamtype}
            value={valueDreamtype} setValue={setValueDreamtype}
            items={itemsDreamtype} setItems={setItemsDreamtype}
            zIndex={1000}
          />
        </View>

        <View style={styles.adddream_option}>
          <View style={styles.adddream_options_listarea}>
            <View style={styles.checkbox_item_x50}>
              <Checkbox style={styles.checkbox} value={false} color={'rgba(180,180,180,0.8)'} />
              <Text style={styles.checkbox_text_x50}>Loop</Text>
            </View>
            <View style={styles.checkbox_item_x50}>
              <Checkbox style={styles.checkbox} value={false} color={'rgba(180,180,180,0.8)'} />
              <Text style={styles.checkbox_text_x50}>Labyrinth</Text>
            </View>
            <View style={styles.checkbox_item_x50}>
              <Checkbox style={styles.checkbox} value={false} color={'rgba(180,180,180,0.8)'} />
              <Text style={styles.checkbox_text_x50}>Nested</Text>
            </View>
            <View style={styles.checkbox_item_x50}>
              <Checkbox style={styles.checkbox} value={false} color={'rgba(180,180,180,0.8)'} />
              <Text style={styles.checkbox_text_x50}>Impersonal</Text>
            </View>
            <View style={styles.checkbox_item_x50}>
              <Checkbox style={styles.checkbox} value={false} color={'rgba(180,180,180,0.8)'} />
              <Text style={styles.checkbox_text_x50}>Nightmare</Text>
            </View>
            <View style={styles.checkbox_item_x50}>
              <Checkbox style={styles.checkbox} value={false} color={'rgba(180,180,180,0.8)'} />
              <Text style={styles.checkbox_text_x50}>Transitive</Text>
            </View>
          </View>
        </View>

        <View style={styles.adddream_option}>
          <View style={styles.checkbox_item}>
            <Checkbox
              style={styles.checkbox}
              value={false}
              color={'rgba(180,180,180,0.8)'}
            />
            <Text style={styles.settings_item_optiontext}>Reoccuring</Text>

            <TouchableOpacity style={styles.tagwrap_pick}>
              <Text style={styles.tagwrap_pick_text}>Pick...</Text>
            </TouchableOpacity>

          </View>
        </View>

        <View style={styles.adddream_option}>
          <View style={styles.adddream_options_note}><Text style={styles.home_list_desc}>Tags</Text></View>

          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>

            <TouchableOpacity style={styles.tagwrap}>
              <View style={styles.tagwrap_icon}>
                <TagLocation />
              </View>
              <Text style={styles.tagwrap_text}>Some tag</Text>
              <View style={styles.tagwrap_icon}>
                <IconRemove />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tagwrap}>
              <Text style={styles.tagwrap_text}>Another tag</Text>
              <View style={styles.tagwrap_icon}>
                <IconRemove />
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.tagwrap_pick}>
              <Text style={styles.tagwrap_pick_text}>Pick...</Text>
            </TouchableOpacity>



          </View>

        </View>

        <View style={styles.adddream_option}>
          <View style={styles.adddream_options_note}><Text style={styles.home_list_desc}>Related dreams</Text><View style={styles.tags_list_iconu}><IconUncomplete /></View></View>

          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            <TouchableOpacity style={styles.tagwrap_pick}>
              <Text style={styles.tagwrap_pick_text}>Pick...</Text>
            </TouchableOpacity>
          </View>

        </View>

        <View style={styles.adddream_option}>
          <View style={styles.checkbox_item}>
            <Checkbox
              style={styles.checkbox}
              value={false}
              color={'rgba(180,180,180,0.8)'}
            />
            <Text style={styles.settings_item_optiontext}>Some characters seemed familiar inbefore</Text>
          </View>
        </View>

        <View style={styles.adddream_option}>
          <View style={styles.checkbox_item}>
            <Checkbox
              style={styles.checkbox}
              value={false}
              color={'rgba(180,180,180,0.8)'}
            />
            <Text style={styles.settings_item_optiontext}>Nearby location seemed to be known inbefore</Text>
          </View>
        </View>






      </ScrollView>



      {/* ? popup example */}
      <Modal
        animationType={"none"}
        transparent={true}
        visible={modalQVisible}
        onRequestClose={() => {
          setModalQVisible(!modalQVisible);
        }}>
        <View style={styles.tags_newtag_window}>
          <View style={styles.tags_newtag_window_actual}>

            <Text style={styles.tags_newtag_window_header}>Dream types</Text>

            <ScrollView>

              <Text style={styles.cmp_article_in_elementbold}>Major dream types</Text>
              <Text style={styles.home_list_content}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...
              </Text>
              <Text style={styles.home_list_content}>
                Dreamscape does neither approve or neglect some rare types of dreams existence like Mutual, but at the moment please mark them as Uncommon.
              </Text>

              <Text style={styles.cmp_article_in_elementbold}>Minor dream types</Text>
              <Text style={styles.home_list_content}>
                Loop is a kind of dreams that has repeating scenario from and to some point over and over, with same or slightly different circumstances - all within one dream.
              </Text>

              <View style={styles.adddream_options_note}><Text style={styles.home_list_desc}>Note</Text></View>
              <Text style={styles.home_list_content}>
                It is important for practice to be realistic about your experience. Try to be fair with yourself completing dream properties card.
              </Text>

              <View style={styles.adddream_options_note}><Text style={styles.home_list_desc}>Note</Text></View>
              <Text style={styles.home_list_content}>
                For full elaboration, check out Dream types article.
              </Text>

            </ScrollView>

          </View>
        </View>
      </Modal>


    </View>
  );
}


export default function ScreenHomeAddDream() {
  return (
    <View style={styles.body_add_general}>
      <DreamSettings.Navigator backBehavior={'none'} tabBarPosition={'bottom'} tabBar={props => <DreamAddMenu {...props} initialRouteName="screen_dreamadd" />}>
        <DreamSettings.Screen name="screen_dreamadd" component={DreamAddScreen} options={{ animationEnabled: false, key: '1', presentation: 'containedtransparentModal' }} />
        <DreamSettings.Screen name="screen_dreamedit" component={DreamSettingsScreen} options={{ animationEnabled: false, key: '2', presentation: 'containedtransparentModal' }} />
      </DreamSettings.Navigator>
    </View>
  )
};


{/* bottom menu styling garbage */ }
function DreamAddMenu({ state, descriptors, navigation, position }) {
  return (
    <View style={{
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      overflow: 'hidden',
      paddingBottom: wwidth * 0.025,

      /* 
      borderWidth: 0.25,
      borderColor: 'white',
      */
    }}>
      <View style={{
        flexDirection: 'row',
        overflow: 'hidden',
        width: wwidth / 2,
        alignContent: 'stretch',
        justifyContent: 'space-around',
      }}>
        <View style={styles.addream_button}><AddButtonNext /></View>
        <View style={styles.addream_button}><AddButtonSave /></View>
      </View>
      <View style={{
        flexDirection: 'row',
        overflow: 'hidden',
        alignContent: 'stretch',
        justifyContent: 'space-around',
        backgroundColor: 'tansparent',
        width: wwidth / 2,
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

          function addswitch() {
            if (index == 0 & !isFocused) return (<View style={styles.addream_button}><AddButtonText /></View>)
            if (index == 0 & isFocused) return (<View style={styles.addream_buttonactive}><AddButtonText /></View>)
            if (index == 1 & !isFocused) return (<View style={styles.addream_button}><AddButtonSettings /></View>)
            if (index == 1 & isFocused) return (<View style={styles.addream_buttonactive}><AddButtonSettings /></View>)
          };

          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
            >
              <Animated.Text style={{ opacity }}>
                {addswitch()}
              </Animated.Text>
            </TouchableOpacity>

          );
        })}
      </View>

    </View>
  );
}