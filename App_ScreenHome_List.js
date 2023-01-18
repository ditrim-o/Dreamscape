import { StyleSheet, Text, ScrollView, View, Dimensions, Button, Image, ImageBackground, StatusBar, TouchableHighlight, TouchableOpacity, TextInput } from 'react-native';
import React, {useState} from 'react';
import { useWindowDimensions } from 'react-native';
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import { Shadow } from 'react-native-shadow-2';

import styles from './Styles'

import BtnDreamEdit from './assets/images/icon_edit.svg';
import BtnAddByRead from './assets/images/icon_addbyread.svg';
import BtnShare from './assets/images/icon_share.svg';
import BtnDelete from './assets/images/icon_delete.svg';
import SepH from './assets/images/utility_seph.svg';

import TagSpecial from './assets/images/tag_special.svg';
import TagLocation from './assets/images/tag_location.svg';
import TagCharacter from './assets/images/tag_character.svg';

import IconUncomplete from './assets/images/list_depleted.svg';

import SeacrhBarAdd from './assets/images/icon_search.svg';
import SeacrhBarSearch from './assets/images/icon_search.svg';

const wwidth = Dimensions.get("window").width;
const wheight = Dimensions.get("window").height;

export default function ScreenHomeList() {

  const [SearchString, setSearchString] = useState('');

  return (

    <View style={styles.body_list}>

      <View style={{flex:1, flexDirection:'row', marginBottom: wwidth * 0.0685 + wwidth * 0.025,}}>
      <SeacrhBarSearch style={styles.searchbar_btn} />
      <TextInput
        style={styles.searchbar_text}
        value={SearchString}
        onChangeText={(SearchString) => setSearchString(SearchString)}
        placeholder={'Search here...'}
        placeholderTextColor={'rgba(200,200,200,0.35)'}
        cursorColor={'white'}
      />
      </View>

    <ScrollView style={styles.body_list_content} fadingEdgeLength={50}>

      <View>
        <Text style={styles.home_dreamlist_itemname}>Name text</Text>
        <Text><Text style={styles.home_dreamlist_itemtype2}>Type</Text><Text style={styles.home_dreamlist_itemtype0}>, importancy</Text></Text>
        <Text style={styles.home_list_content}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...
        </Text>
        <View style={styles.home_dreamreading_bottom}>
          <View style={styles.home_list_data}>

            <View style={styles.tags_header}>
            <Text style={styles.home_list_desc}>Tagged as </Text>

            <View style={styles.tags_list_icon}><TagCharacter /></View><Text style={styles.tags_list_text}>some tag</Text>
            <Text style={styles.home_list_desc}>, </Text>
            <Text style={styles.tags_list_text}>some tag</Text>
            <Text style={styles.home_list_desc}>, </Text>
            <View style={styles.tags_list_icon}><TagSpecial /></View><Text style={styles.tags_list_text}>some tag</Text>
            </View>

            <View style={styles.tags_header}><Text style={styles.home_list_desc}>Added %date% | Dreamt %dreamdate%</Text><View style={styles.tags_list_iconu}><IconUncomplete /></View></View>
          </View>
          <BtnDreamEdit style={styles.home_dreamreading_buttonEdit} />
          <BtnAddByRead style={styles.home_dreamreading_buttonEdit} />
        </View>
      </View>

      <View style={styles.seph}></View>
      
      <View>
        <Text style={styles.home_dreamlist_itemname}>Name text</Text>
        <Text><Text style={styles.home_dreamlist_itemtype2}>Type</Text><Text style={styles.home_dreamlist_itemtype0}>, importancy</Text></Text>
        <Text style={styles.home_list_content}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...
        </Text>
        <View style={styles.home_dreamreading_bottom}>
          <View style={styles.home_list_data}>

            <View style={styles.tags_header}>
            <Text style={styles.home_list_desc}>Tagged as </Text>
            <Text style={styles.tags_list_text}>some tag</Text>
            </View>

            <Text style={styles.home_list_desc}>Added %date% | Dreamt %dreamdate% </Text>
          </View>
          <BtnDreamEdit style={styles.home_dreamreading_buttonEdit} />
          <BtnAddByRead style={styles.home_dreamreading_buttonEdit} />
        </View>
      </View>

      <View style={styles.seph}></View>
      
      <View>
        <Text style={styles.home_dreamlist_itemname}>Name text</Text>
        <Text><Text style={styles.home_dreamlist_itemtype2}>Type</Text><Text style={styles.home_dreamlist_itemtype0}>, importancy</Text></Text>
        <Text style={styles.home_list_content}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...
        </Text>
        <View style={styles.home_dreamreading_bottom}>
          <View style={styles.home_list_data}>

            <View style={styles.tags_header}>
            <Text style={styles.home_list_desc}>Tagged as </Text>
            <Text style={styles.tags_list_text}>some tag</Text>
            </View>

            <Text style={styles.home_list_desc}>Added %date% | Dreamt %dreamdate% </Text>
          </View>
          <BtnDreamEdit style={styles.home_dreamreading_buttonEdit} />
          <BtnAddByRead style={styles.home_dreamreading_buttonEdit} />
          <BtnShare style={styles.home_dreamreading_buttonEdit} />
          <BtnDelete style={styles.home_dreamreading_buttonEdit} />
        </View>
      </View>

      <View style={styles.seph}></View>
      
      <View>
        <Text style={styles.home_dreamlist_itemname}>Name text</Text>
        <Text><Text style={styles.home_dreamlist_itemtype2}>Type</Text><Text style={styles.home_dreamlist_itemtype0}>, importancy</Text></Text>
        <Text style={styles.home_list_content}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...
        </Text>
        <View style={styles.home_dreamreading_bottom}>
          <View style={styles.home_list_data}>

            <View style={styles.tags_header}>
            <Text style={styles.home_list_desc}>Tagged as </Text>
            <Text style={styles.tags_list_text}>some tag</Text>
            </View>

            <Text style={styles.home_list_desc}>Added %date% | Dreamt %dreamdate% </Text>
          </View>
          <BtnDreamEdit style={styles.home_dreamreading_buttonEdit} />
          <BtnAddByRead style={styles.home_dreamreading_buttonEdit} />
          <BtnShare style={styles.home_dreamreading_buttonEdit} />
          <BtnDelete style={styles.home_dreamreading_buttonEdit} />
        </View>
      </View>

      <View style={styles.seph}></View>
      
      <View>
        <Text style={styles.home_dreamlist_itemname}>Name text</Text>
        <Text><Text style={styles.home_dreamlist_itemtype2}>Type</Text><Text style={styles.home_dreamlist_itemtype0}>, importancy</Text></Text>
        <Text style={styles.home_list_content}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...
        </Text>
        <View style={styles.home_dreamreading_bottom}>
          <View style={styles.home_list_data}>

            <View style={styles.tags_header}>
            <Text style={styles.home_list_desc}>Tagged as </Text>
            <Text style={styles.tags_list_text}>some tag</Text>
            </View>

            <Text style={styles.home_list_desc}>Added %date% | Dreamt %dreamdate% </Text>
          </View>
          <BtnDreamEdit style={styles.home_dreamreading_buttonEdit} />
          <BtnAddByRead style={styles.home_dreamreading_buttonEdit} />
          <BtnShare style={styles.home_dreamreading_buttonEdit} />
          <BtnDelete style={styles.home_dreamreading_buttonEdit} />
        </View>
      </View>






    

    </ScrollView>

  </View>

  )
};
    

