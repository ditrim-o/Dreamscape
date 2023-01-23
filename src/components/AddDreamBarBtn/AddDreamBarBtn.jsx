import AddButtonText from './../../assets/images/add_text.svg';
import AddButtonSettings from './../../assets/images/add_properties.svg';
import styles from './AddDreamBarBtn.styles'

import { TouchableOpacity, View } from "react-native"

const AddDreamBarBtn = ({ navigation, index, isFocused, options, route }) => {
    const onPress = (event) => {
        if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({ name: route.name, merge: true });
        }
    }
    return (
        <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={(e) => { onPress(e) }}
        >
            {index == 0 ?
                <View style={!isFocused ? styles.addream_button : styles.addream_buttonactive}><AddButtonText /></View> :
                <View style={!isFocused ? styles.addream_button : styles.addream_buttonactive}><AddButtonSettings /></View>}
        </TouchableOpacity>
    )
}

export default AddDreamBarBtn