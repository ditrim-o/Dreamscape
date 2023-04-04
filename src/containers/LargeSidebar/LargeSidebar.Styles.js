import { StyleSheet, Dimensions } from 'react-native';
const wwidth = Dimensions.get("window").width;
const wheight = Dimensions.get("window").height;
export default StyleSheet.create({
    sidemenucore: {
        flex: 1,
        flexDirection: 'column',

        /*justifyContent:'space-between',*/
        margin: wwidth * 0.025,
    },
    adddream_option: {
        marginBottom: wwidth * 0.025,
        position: 'relative',
    },
    adddream_options_note: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignContent: 'center',

    },
    home_list_desc: {
        fontFamily: 'OpenSansLight',
        fontSize: 12,
        color: 'rgba(200,200,200,0.65)',
    },
    adddream_dropdown: {
        backgroundColor: 'transparent',
        borderWidth: 0,
        borderColor: 'rgba(200,200,200,0.8)',
        borderBottomWidth: 0.25,
        borderRadius: 0,
    },
    adddream_dropdown_open: {
        backgroundColor: 'rgba(34, 34, 34, 1)',
        borderWidth: 0,
        borderColor: 'rgba(200,200,200,0.8)',
        borderBottomWidth: 0.25,
        borderRadius: 0,
    },
    checkbox_item: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkbox: {
        margin: wwidth * 0.025,
    },
    settings_item_optiontext: {
        fontFamily: 'AlegreyaSansRegular',
        fontSize: 18,
        color: 'white',
    },
    tags_list_iconu_noshade: {
        width: 14,
        height: 14,
        opacity: 0.85,
    },
    seph: {
        width: 265,
        height: 0.25,
        marginTop: wwidth * 0.025,
        marginBottom: wwidth * 0.025,
        opacity: 0.35,
        alignSelf: 'center',
        borderColor: 'white',
        borderBottomWidth: 0.25,
    },

    sidemenu_buttonfield: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: -wwidth * 0.035,
    },

    home_buttons_sidemenu: {
        position: 'relative',
        height: wwidth * 0.2,
        width: wwidth * 0.2,
        padding: wwidth * 0.035,
        textAlign: 'center',
    },
    home_buttons_sidemenu_text: {
        color: '#ffffff',
        fontFamily: 'AlegreyaSansBold',
        fontSize: 12,
        alignSelf: 'center',
        paddingTop: wwidth * 0.015,
        marginLeft: -15,
        marginRight: -15,
    },

})
