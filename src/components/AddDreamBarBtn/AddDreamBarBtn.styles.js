import { StyleSheet, Dimensions } from 'react-native';
const wwidth = Dimensions.get("window").width;
const wheight = Dimensions.get("window").height;
export default StyleSheet.create({
    addream_button: {
        width: wwidth * 0.1,
        height: wwidth * 0.08,
        opacity: 0.2,
        padding: wwidth * 0.01,
    },
    addream_buttonactive: {
        width: wwidth * 0.08,
        height: wwidth * 0.08,
        opacity: 0.35,
        padding: wwidth * 0.01,
    },
})