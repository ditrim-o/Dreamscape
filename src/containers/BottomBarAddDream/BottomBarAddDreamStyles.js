import { StyleSheet, Dimensions } from 'react-native';
const wwidth = Dimensions.get("window").width;
const wheight = Dimensions.get("window").height;
export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        overflow: 'hidden',
        paddingBottom: wwidth * 0.025,
    },
    buttons_wrapper: {
        flexDirection: 'row',
        overflow: 'hidden',
        width: wwidth / 2,
        alignContent: 'stretch',
        justifyContent: 'space-around',
    },
    addream_button: {
        width: wwidth * 0.1,
        height: wwidth * 0.08,
        opacity: 0.2,
        padding: wwidth * 0.01,
    },
})