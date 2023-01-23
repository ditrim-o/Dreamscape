import { useState } from 'react';
import { Modal, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { RadioGroup } from 'react-native-radio-buttons-group';
import styles from './AddDreamSettings.styles'
import Checkbox from 'expo-checkbox';
import IconRemove from './../../assets/images/tag_close.svg';
import TagLocation from './../../assets/images/tag_location2.svg'
import IconUncomplete from './../../assets/images/icon_q.svg';
import SelectDropdown from 'react-native-select-dropdown'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import DateSettings from './DateSettings/DateSettings';
import TypeSettings from './TypeSettings/TypeSettings';

const AddDreamSettings = ({ }) => {

    return (
        <View style={styles.body_adddream_options}>
            <ScrollView>
                <DateSettings />
                <TypeSettings />

                <View style={styles.adddream_option}>
                    <View style={styles.adddream_options_note}><Text onPress={() => setModalQVisible(true)} style={styles.home_list_desc}>Dream type</Text><View style={styles.tags_list_iconu}><IconUncomplete /></View></View>
                    <SelectDropdown
                        data={["Unspecified", 'Lucid', 'Common', 'Awared', 'Uncommon',]}
                        dropdownStyle={styles.adddream_dropdown}
                        dropdownBackgroundColor={"black"}
                        rowTextStyle={{ fontFamily: 'AlegreyaSansRegular', fontSize: 18, color: 'white', textAlign: 'left' }}
                        buttonStyle={styles.adddream_dropdown}
                        buttonTextStyle={{ fontFamily: 'AlegreyaSansRegular', fontSize: 18, color: 'white', textAlign: 'left' }}
                        dropdownIconPosition={"right"}
                        renderDropdownIcon={isOpened => {
                            return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
                        }}
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
        </View>



        // {/* ? popup example */}
        // <Modal
        //     animationType={"none"}
        //     transparent={true}
        //     visible={modalQVisible}
        //     onRequestClose={() => {
        //         setModalQVisible(!modalQVisible);
        //     }}>
        //     <View style={styles.tags_newtag_window}>
        //         <View style={styles.tags_newtag_window_actual}>

        //             <Text style={styles.tags_newtag_window_header}>Dream types</Text>

        //             <ScrollView>

        //                 <Text style={styles.cmp_article_in_elementbold}>Major dream types</Text>
        //                 <Text style={styles.home_list_content}>
        //                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        //                     incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...
        //                 </Text>
        //                 <Text style={styles.home_list_content}>
        //                     Dreamscape does neither approve or neglect some rare types of dreams existence like Mutual, but at the moment please mark them as Uncommon.
        //                 </Text>

        //                 <Text style={styles.cmp_article_in_elementbold}>Minor dream types</Text>
        //                 <Text style={styles.home_list_content}>
        //                     Loop is a kind of dreams that has repeating scenario from and to some point over and over, with same or slightly different circumstances - all within one dream.
        //                 </Text>

        //                 <View style={styles.adddream_options_note}><Text style={styles.home_list_desc}>Note</Text></View>
        //                 <Text style={styles.home_list_content}>
        //                     It is important for practice to be realistic about your experience. Try to be fair with yourself completing dream properties card.
        //                 </Text>

        //                 <View style={styles.adddream_options_note}><Text style={styles.home_list_desc}>Note</Text></View>
        //                 <Text style={styles.home_list_content}>
        //                     For full elaboration, check out Dream types article.
        //                 </Text>

        //             </ScrollView>

        //         </View>
        //     </View>
        // </Modal>



    );
}

export default AddDreamSettings
