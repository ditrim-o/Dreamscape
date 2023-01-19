import { StyleSheet, Dimensions } from 'react-native';
const wwidth = Dimensions.get("window").width;
const wheight = Dimensions.get("window").height;
export default StyleSheet.create({

    home_buttons: {
        display: 'flex',
        justifyContent: 'center',
        width: wwidth * 0.25,
        overflow: 'hidden',
        backgroundColor: "black",
        height: "100%",
        backgroundColor: "rgba(27, 25, 25, 1)",
    },
    homemenu_button: {
        position: 'relative',
        height: wwidth * 0.2,
        width: wwidth * 0.2,

        margin: wwidth * 0.025,
        marginBottom: wwidth * 0.025 + 20,
        textAlign: 'center',
    },
    homemenu_button_text: {
        color: '#ffffff',
        fontFamily: 'AlegreyaSansBold',
        fontSize: 14,
        alignSelf: 'center',
        textAlign: 'center',
        width: wwidth * 0.3,
    },
    sepv: {
        width: 1,
        height: wheight - 250,
        marginTop: wwidth * 0.025,
        marginBottom: wwidth * 0.025,
        opacity: 0.35,
        alignSelf: 'center',
        borderColor: 'white',
        borderRightWidth: 0.25,
    },
    home_widgetarea: {
        margin: wwidth * 0.025,
    },
    tags_newtag_window_header: {
        fontFamily: 'AlegreyaSansBold',
        fontSize: 18,
        color: 'white',
        marginBottom: wwidth * 0.025,
    },
})

