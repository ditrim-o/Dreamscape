import styles from "./LargeSidebar.Styles.js";
import { Text, ScrollView, View, Dimensions } from 'react-native';
import DropDownPicker from "react-native-dropdown-picker";
const wwidth = Dimensions.get("window").width;
const wheight = Dimensions.get("window").height;
import HButtonAdd from './../../assets/images/home_add_small.svg';
import HButtonDreambox from './../../assets/images/home_dreambox_small.svg'
import HButtonTags from './../../assets/images/home_tags_small.svg';
import IconUncomplete from './../../assets/images/list_depleted.svg';
import Checkbox from 'expo-checkbox';

const LargeSidebar = () => {
    return (<>

        <View style={styles.sidemenucore}>
            <View style={styles.adddream_option}>
                <View style={styles.adddream_options_note}><Text style={styles.home_list_desc}>Time range</Text></View>
                {/* <DropDownPicker
                    listMode="SCROLLVIEW" theme="DARK"
                    style={styles.adddream_dropdown}
                    dropDownContainerStyle={styles.adddream_dropdown_open}
                    textStyle={{ fontFamily: 'AlegreyaSansRegular', fontSize: 18, color: 'white', }}
                    zIndex={5000}
                /> */}
            </View>

            {/*<BlurView style={styles.absolute} blurType="light" blurAmount={10} />*/}


            <View style={{ height: wheight - 225, }} >

                <ScrollView>


                    {/* <View style={styles.adddream_option}>
                        <View style={styles.adddream_options_note}><Text style={styles.home_list_desc}>Time range</Text></View>
                        <DropDownPicker
                            listMode="SCROLLVIEW" theme="DARK"
                            style={styles.adddream_dropdown}
                            dropDownContainerStyle={styles.adddream_dropdown_open}
                            textStyle={{ fontFamily: 'AlegreyaSansRegular', fontSize: 18, color: 'white', }}
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
                            zIndex={4000}
                        />
                    </View> */}

                    <View style={styles.adddream_option}>
                        <View style={styles.adddream_options_note}><Text style={styles.home_list_desc}>Show by importancy</Text></View>
                        <DropDownPicker
                            listMode="SCROLLVIEW" theme="DARK"
                            style={styles.adddream_dropdown}
                            dropDownContainerStyle={styles.adddream_dropdown_open}
                            textStyle={{ fontFamily: 'AlegreyaSansRegular', fontSize: 18, color: 'white', }}
                            zIndex={2800}
                            open={false}
                            value={"1"}
                            items={[
                                { label: 'All dreams', value: '1' },
                                { label: 'This day', value: '2' },
                                { label: 'This week', value: '3' },
                                { label: 'This month', value: '4' },
                                { label: '[calendar picked d/w/m]', value: '5' }
                            ]}
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
                        <HButtonAdd /><Text style={styles.home_buttons_sidemenu_text}>Add new dream</Text>
                    </View>
                    <View style={styles.home_buttons_sidemenu}>
                        <HButtonDreambox /><Text style={styles.home_buttons_sidemenu_text}>Dreambox</Text>
                    </View>
                    <View style={styles.home_buttons_sidemenu}>
                        <HButtonTags /><Text style={styles.home_buttons_sidemenu_text}>Explore Tags</Text>
                    </View>
                </View>
            </View>



        </View>

    </>


    );
}

export default LargeSidebar