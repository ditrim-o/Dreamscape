import { Text, View } from "react-native"

import BtnDreamEdit from './../../assets/images/icon_edit.svg';
import BtnAddByRead from './../../assets/images/icon_addbyread.svg';
import BtnShare from './../../assets/images/icon_share.svg';
import BtnDelete from './../../assets/images/icon_delete.svg';
import SepH from './../../assets/images/utility_seph.svg';
import TagCharacter from './../../assets/images/tag_character.svg';
import styles from "./DreamListItem.styles"


const DreamListItem = () => {
    return (
        <>
            <View>
                <Text style={styles.home_dreamlist_itemname}>Name text</Text>
                <Text><Text style={styles.home_dreamlist_itemtype2}>Type</Text><Text style={styles.home_dreamlist_itemtype0}>, importancy</Text></Text>
                <Text style={styles.home_list_content}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...
                </Text>
                <View style={styles.home_dreamreading_bottom}>
                    <View style={styles.home_list_data}>

                        <View style={styles.tags_header}>
                            <View style={styles.tags_list_icon}>
                                <TagCharacter />
                            </View>
                            <Text style={styles.tags_list_text}>some tag</Text>
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

            <View style={styles.seph}></View></>
    )
}

export default DreamListItem