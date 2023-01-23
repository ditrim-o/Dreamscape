import { Text, View } from "react-native"


import BtnAddByRead from './../../assets/images/icon_addbyread.svg';
import BtnShare from './../../assets/images/icon_share.svg';
import BtnDelete from './../../assets/images/icon_delete.svg';
import SepH from './../../assets/images/utility_seph.svg';
import TagCharacter from './../../assets/images/tag_character.svg';
import styles from "./DreamListItem.styles"
import DreamEditButton from "./DreamEditButton/DreamEditButton";
import DreamRemoveButton from "./DreamRemoveButton/DreamRemoveButton";



const DreamListItem = ({ navigation, dream }) => {
    const calcDate = () => {
        const date = dream.date;
        if (date && date != "unknown") {
            const dateObj = new Date(date)
            return `${dateObj.getMonth() + 1}-${dateObj.getDate()}-${dateObj.getFullYear()}`
        } else {
            return date
        }
    }

    const calcAddedDate = () => {
        const date = dream.addedDate;
        if (date) {
            const dateObj = new Date(date)
            return `${dateObj.getMonth() + 1}-${dateObj.getDate()}-${dateObj.getFullYear()}`
        }
    }

    return (
        <>

            <View>
                <Text style={styles.home_dreamlist_itemname}>{dream.name}</Text>
                <Text>
                    <Text style={styles.home_dreamlist_itemtype2}>Type: </Text>
                    <Text style={styles.home_dreamlist_itemtype0}>{dream.type}</Text>
                </Text>
                <Text style={styles.home_list_content}>
                    {dream.text}
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

                        <Text style={styles.home_list_desc}>Added {calcAddedDate()} | Dreamt {calcDate()} </Text>
                    </View>
                    <DreamEditButton
                        dream={dream}
                        navigation={navigation}
                    />
                    <BtnAddByRead style={styles.home_dreamreading_buttonEdit} />
                    <BtnShare style={styles.home_dreamreading_buttonEdit} />
                    <DreamRemoveButton
                        dream={dream}
                    />
                </View>
            </View>

            <View style={styles.seph}></View></>
    )
}

export default DreamListItem