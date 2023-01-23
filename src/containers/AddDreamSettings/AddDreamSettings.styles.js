import { StyleSheet, Dimensions } from 'react-native';

const x100 = '100%';
const x50 = '50%';
const x45 = '45%';
const x35 = '35%';
const wwidth = Dimensions.get("window").width;
const wheight = Dimensions.get("window").height;

export default StyleSheet.create({
    body_add_general: {
        height: wheight - 100,

    },

    body_adddream: {
        margin: wwidth * 0.025,
        position: 'relative',
        /*height: wheight - 125,*/

        /*
        borderWidth: 0.25,
        borderColor: 'white',
        */
    },

    adddream_inputName: {
        borderColor: '#eeeeee',
        borderBottomWidth: 0.25,
        paddingBottom: 6,

        fontFamily: 'OpenSansLight',
        fontSize: 16,
        color: '#eeeeee',
    },

    adddream_inputContent: {
        fontFamily: 'OpenSansLight',
        fontSize: 16,
        color: '#eeeeee',
        paddingTop: 0,
        paddingBottom: 0,
        borderColor: '#eeeeee',
        borderBottomWidth: 0.25,
        height: 200,
        textAlignVertical: 'top',
        marginTop: wwidth * 0.025,
        overflow: 'visible',
    },

    addream_buttonfield: {
        flex: 1,
        flexDirection: 'row',
    },

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

    body_adddream_options: {
        margin: wwidth * 0.025,
        position: 'relative',
        flex: 1,
        alignContent: 'flex-start',
    },

    adddream_option: {
        marginBottom: 20,
        position: 'relative',
        flexGrow: 0,
        height: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start"
    },

    adddream_options_note: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignContent: 'center',

    },

    adddream_dropdown: {
        backgroundColor: 'rgba(34, 34, 34, 1)',
        width: "100%",
        color: "white",
        borderColor: 'rgba(200,200,200,0.8)',
        borderBottomWidth: 0.25,
        borderRadius: 0,
        marginTop: 4


    },
    adddream_dropdown_open: {
        // backgroundColor: 'rgba(34, 34, 34, 1)',
        // borderWidth: 0,
        // borderColor: 'rgba(200,200,200,0.8)',
        // borderBottomWidth: 0.25,
        // borderRadius: 0,
        // opacity: 1,
        // backgroundColor: "red",
        // zIndex: 1000
    },

    adddream_options_listarea: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },

    tagwrap: {
        flexDirection: 'row',
        height: 32,
        borderRadius: 10,
        backgroundColor: 'rgba(200,200,200,0.15)',
        alignItems: 'center',
        paddingLeft: 5,
        paddingRight: 5,
        marginLeft: 5,
        marginTop: 5,
        flexGrow: 0,
    },
    tagwrap_pick: {
        flexDirection: 'row',
        height: 32,
        borderWidth: 2.5,
        borderColor: 'rgba(200,200,200,0.65)',
        borderRadius: 10,
        backgroundColor: 'rgba(200,200,200,0.15)',
        alignItems: 'center',
        paddingLeft: 5,
        paddingRight: 5,
        marginLeft: 5,
        marginTop: 5,
        flexGrow: 0,
    },

    tagwrap_text: {
        fontFamily: 'OpenSansRegular',
        fontSize: 16,
        color: 'rgba(255,255,255,0.8)',
        marginRight: 5,

    },
    tagwrap_pick_text: {
        fontFamily: 'OpenSansRegular',
        fontSize: 16,
        color: 'rgba(200,200,200,0.65)',
        marginRight: 5,

    },

    tagwrap_icon: {
        width: 16,
        height: 16,
        opacity: 0.8,

    },
    settings_item_optiontext: {
        fontFamily: 'AlegreyaSansRegular',
        fontSize: 18,
        color: 'white',
    },
    home_list_desc: {
        fontFamily: 'OpenSansLight',
        fontSize: 12,
        color: 'rgba(200,200,200,0.65)',
    },
    checkbox_item_x50: {
        flexDirection: 'row',
        width: x50,
    },
    checkbox_text_x50: {
        fontFamily: 'AlegreyaSansRegular',
        fontSize: 18,
        color: 'white',
        alignSelf: 'center',
        height: 26,
    },
    checkbox: {
        margin: wwidth * 0.025,
    },
    checkbox_item: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    tags_list_iconu: {
        width: 14,
        height: 14,
        opacity: 0.35,
        marginLeft: 2.5,
    },

})