import { Text, TouchableOpacity, ScrollView, View } from "react-native"
import styles from "./HomeSidebar.styles"

import HButtonAdd from './../../assets/images/home_add_small.svg';
import HButtonList from './../../assets/images/home_list_small.svg';
import HButtonDreambox from './../../assets/images/home_dreambox_small.svg'
import HButtonTags from './../../assets/images/home_tags_small.svg';
import { useDispatch } from "react-redux";
import { resetCurrent } from "../../store/reducers/dreamsSlice";



const HomeSidebar = ({ navigation }) => {
    const dispatch = useDispatch()
    const addDreamHandler = () => {
        dispatch(resetCurrent())
        navigation.navigate('AddDream')
    }
    return (
        <View style={styles.home_buttons}>
            <TouchableOpacity onPress={() => { addDreamHandler() }}>
                <View style={styles.homemenu_button}>
                    <HButtonAdd /><Text style={styles.homemenu_button_text}>Add new dream</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.homemenu_button}>
                    <HButtonDreambox /><Text style={styles.homemenu_button_text}>Dreambox</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('DreamList')}>
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
    )
}

export default HomeSidebar