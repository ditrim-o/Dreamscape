import { Text, View } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import IconUncomplete from './../../../assets/images/icon_q.svg';
import styles from './../AddDreamSettings.styles'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentDream, setDreamType } from "../../../store/reducers/dreamsSlice";


const TypeSettings = () => {
    const currentDream = useSelector(selectCurrentDream)
    const dispatch = useDispatch()
    const selectHandler = (val) => {
        dispatch(setDreamType(val))
    }
    return (
        <View style={styles.adddream_option}>
            <View style={styles.adddream_options_note}>
                <Text style={styles.home_list_desc}>Importancy</Text>
                <View style={styles.tags_list_iconu}>
                    <IconUncomplete />
                </View>
            </View>
            <SelectDropdown
                data={["Unspecified", 'Flood', 'Common', 'Interesting', 'Important']}
                dropdownStyle={styles.adddream_dropdown}
                dropdownBackgroundColor={"black"}
                defaultValue={currentDream.type}
                rowTextStyle={{ fontFamily: 'AlegreyaSansRegular', fontSize: 18, color: 'white', textAlign: 'left' }}
                buttonStyle={styles.adddream_dropdown}
                buttonTextStyle={{ fontFamily: 'AlegreyaSansRegular', fontSize: 18, color: 'white', textAlign: 'left' }}
                dropdownIconPosition={"right"}
                onSelect={val => { selectHandler(val) }}
                renderDropdownIcon={isOpened => {
                    return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
                }}
            />
        </View>
    )
}

export default TypeSettings