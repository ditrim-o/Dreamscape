import { StyleSheet, Text, ScrollView, View, Dimensions, Button, Image, ImageBackground, StatusBar, TouchableHighlight, Modal, Pressable, TouchableOpacity, TouchableWithoutFeedback, TextInput } from 'react-native';
import React, { useState } from 'react';
import { Asset } from 'expo-asset';

import styles from './Styles'

import TagSpecial from './assets/images/tag_special.svg';
import TagLocation from './assets/images/tag_location.svg';
import TagCharacter from './assets/images/tag_character.svg';
import TagLocation2 from './assets/images/tag_location2.svg';
import TagCharacter2 from './assets/images/tag_character2.svg';

import DropDownPicker from 'react-native-dropdown-picker';

export default function ScreenHomeTags() {

  const [modalVisible, setModalVisible] = useState(false);
  const [modalEditTag_Visible, setModalEditTag_Visible] = useState(false);
  const [modalViewTag_Visible, setModalViewTag_Visible] = useState(false);

  const [NewTag, setNewTag] = useState('');
  const [openTagType, setOpenTagType] = useState(false);
  const [valueTagType, setValueTagType] = useState('1');
  const [itemsTagType, setItemsTagType] = useState([
    { label: 'Common', value: '1' },
    { label: 'Special', value: '2', icon: () => <TagSpecial style={styles.tags_icon_pick} /> },
    { label: 'Location', value: '3', icon: () => <TagLocation2 style={styles.tags_icon_pick} /> },
    { label: 'Character', value: '4', icon: () => <TagCharacter2 style={styles.tags_icon_pick} /> }
  ]);

  return (

    <View style={styles.body_tags}>
      <View style={{ flex: 1, flexGrow: 1, }}>
        <ScrollView style={styles.tags_scrollview} fadingEdgeLength={50}>

          <View style={styles.tags_header}>
            <Text style={styles.tags_header_text}>Common tags</Text>
          </View>

          <View style={styles.tags_listarea}>
            <Text style={styles.tags_tag}>Abandoned place (5)</Text>
            <Text style={styles.tags_tag}>Animal (2)</Text>
            <Text style={styles.tags_tag}>Beautiful (11)</Text>
            <Text style={styles.tags_tag}>Lyrics/song (3)</Text>
            <Text style={styles.tags_tag}>Random girl (5)</Text>
            <Text style={styles.tags_tag}>School friends (3)</Text>
            <Text style={styles.tags_tag}>Sex (4)</Text>
          </View>

          <View style={styles.seph}></View>

          <View style={styles.tags_header}>
            <Text style={styles.tags_header_text}>Special tags</Text><View style={styles.tags_icon}><TagSpecial /></View>
          </View>

          <View style={styles.tags_listarea}>
            <Text style={styles.tags_tag}>Chased (5)</Text>
            <Text style={styles.tags_tag}>Seeking/chasing (3)</Text>
            <Text style={styles.tags_tag}>Railway/subway (6)</Text>
            <Text style={styles.tags_tag}>Elevators (2)</Text>
          </View>

          <View style={styles.seph}></View>

          <View style={styles.tags_header}>
            <Text style={styles.tags_header_text}>Locations</Text><View style={styles.tags_icon}><TagLocation /></View>
          </View>

          <View style={styles.tags_listarea}>
            <Text onPress={() => setModalViewTag_Visible(true)} style={styles.tags_tag}>Some tag (%n)</Text>
            <Text onPress={() => setModalViewTag_Visible(true)} style={styles.tags_tag}>Some tag (%n)</Text>
            <Text onPress={() => setModalViewTag_Visible(true)} style={styles.tags_tag}>Some tag (%n)</Text>
            <Text onPress={() => setModalViewTag_Visible(true)} style={styles.tags_tag}>Some tag (%n)</Text>
            <Text onPress={() => setModalViewTag_Visible(true)} style={styles.tags_tag}>Some tag (%n)</Text>
          </View>

          <View style={styles.seph}></View>

          <View style={styles.tags_header}>
            <Text style={styles.tags_header_text}>Characters</Text><View style={styles.tags_icon}><TagCharacter /></View>
          </View>

          <View style={styles.tags_listarea}>
            <Text onPress={() => setModalViewTag_Visible(true)} style={styles.tags_tag}>Some tag (%n)</Text>
            <Text onPress={() => setModalViewTag_Visible(true)} style={styles.tags_tag}>Some tag (%n)</Text>
            <Text onPress={() => setModalViewTag_Visible(true)} style={styles.tags_tag}>Some tag (%n)</Text>
            <Text onPress={() => setModalViewTag_Visible(true)} style={styles.tags_tag}>Some tag (%n)</Text>
            <Text onPress={() => setModalViewTag_Visible(true)} style={styles.tags_tag}>Some tag (%n)</Text>
            <Text onPress={() => setModalViewTag_Visible(true)} style={styles.tags_tag}>Some tag (%n)</Text>
          </View>

        </ScrollView>
      </View>

      <Pressable
        style={[styles.tags_newtag_window_btn]}
        onPress={() => setModalEditTag_Visible(true)}>
        <Text style={styles.tags_newtag_btn_text}>New tag</Text>
      </Pressable>




      {/* New/edit tag */}
      <Modal
        animationType={"none"}
        transparent={true}
        visible={modalEditTag_Visible}
        onRequestClose={() => {
          setModalEditTag_Visible(!modalEditTag_Visible);
        }}>
        <View style={styles.tags_newtag_window}>
          <View style={styles.tags_newtag_window_actual}>

            <Text style={styles.tags_newtag_window_header}>Create new / Edit ~tag</Text>
            <View style={{ flexGrow: 1, }}>

              <TextInput
                style={styles.adddream_inputName}
                value={NewTag}
                onChangeText={(NewTag) => setNewTag(NewTag)}
                placeholder={'New tag...'}
                placeholderTextColor={'rgba(200,200,200,0.35)'}
                cursorColor={'white'}
              />

              <View style={styles.tags_newtag_window_element}>
                <View style={styles.adddream_options_note}><Text style={styles.home_list_desc}>Tag type</Text></View>
                <DropDownPicker
                  listMode="SCROLLVIEW" theme="DARK"
                  style={styles.adddream_dropdown}
                  dropDownContainerStyle={styles.adddream_dropdown_open}
                  textStyle={{ fontFamily: 'AlegreyaSansRegular', fontSize: 18, color: 'white', }}
                  open={openTagType} setOpen={setOpenTagType}
                  value={valueTagType} setValue={setValueTagType}
                  items={itemsTagType} setItems={setItemsTagType}
                  zIndex={2000}
                />
              </View>

              {/* If character */}
              <View style={styles.tags_newtag_window_element}>
                <View style={styles.adddream_options_note}><Text style={styles.home_list_desc}>Image</Text></View>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                  <TouchableOpacity style={styles.tagwrap_pick}>
                    <Text style={styles.tagwrap_pick_text}>Pick...</Text>
                  </TouchableOpacity>
                </View>
              </View>

              {/* If location or character */}
              <View style={styles.tags_newtag_window_element}>
                <View style={styles.adddream_options_note}><Text style={styles.home_list_desc}>Decsription</Text></View>
                <TextInput
                  multiline={true}
                  numberOfLines={10}
                  placeholder={'Description...'}
                  placeholderTextColor={'rgba(200,200,200,0.35)'}
                  style={styles.adddream_inputContent}
                />
              </View>

            </View>
            <View>

              <TouchableOpacity
                style={[styles.tags_newtag_window_btn]}
                onPress={() => setModalEditTag_Visible(!modalEditTag_Visible)}>
                <Text style={styles.tags_newtag_btn_text}>Add/Save tag</Text>
              </TouchableOpacity>

            </View>

          </View>
        </View>
      </Modal>

      {/* View tag */}
      <Modal
        animationType={"none"}
        transparent={true}
        visible={modalViewTag_Visible}
        onRequestClose={() => {
          setModalViewTag_Visible(!modalViewTag_Visible);
        }}>
        <View style={styles.tags_newtag_window}>
          <View style={styles.tags_newtag_window_actual}>

            <View style={{ flexDirection: 'row', textAlignVertical: 'center', alignItems: 'center' }}>
              <TagLocation2 style={styles.tags_icon_pick} /><Text style={styles.tags_viewtag_header}>Some location</Text>
            </View>


            <View style={{ flexGrow: 1, }}>

              {/* If character */}
              <View style={styles.tags_newtag_window_element}>
                <View style={styles.adddream_options_note}><Text style={styles.home_list_desc}>Image</Text></View>
                <Image source={{ uri: Asset.fromModule(require("./assets/images/tempimage.png")).uri, }} style={styles.tagimage} />
              </View>

              {/* If location or character */}
              <View style={styles.tags_newtag_window_element}>
                <View style={styles.adddream_options_note}><Text style={styles.home_list_desc}>Decsription</Text></View>


                <ScrollView>
                  <Text style={styles.home_list_content}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...
                  </Text>
                </ScrollView>
              </View>

            </View>
            <View>

              <TouchableOpacity
                style={[styles.tags_newtag_window_btn]}
                onPress={() => setModalViewTag_Visible(!modalViewTag_Visible)}>
                <Text style={styles.tags_newtag_btn_text}>Edit</Text>
              </TouchableOpacity>

            </View>

          </View>
        </View>
      </Modal>

    </View>

  )
};


