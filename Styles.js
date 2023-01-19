import { StyleSheet, Dimensions } from 'react-native';

const x100 = '100%';
const x50 = '50%';
const x45 = '45%';
const x35 = '35%';
const wwidth = Dimensions.get("window").width;
const wheight = Dimensions.get("window").height;

export default StyleSheet.create({

    /* ======= APP.js STYLES ======= */

    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        height: wheight,
        backgroundColor: 'rgba(27,25,25,1)',
    },

    bgimage: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        height: wheight,
        width: wwidth,
    },

    HeaderFull: {
        height: 50,
        backgroundColor: 'transparent',
        overflow: 'hidden',
    },
    HeaderBack: {
        height: 50,
    },
    HeaderArt: {
        height: 50,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        margin: 'auto',
    },
    HeaderLogo: {
        height: 50,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        margin: 'auto',
        opacity: 1,
        alignSelf: 'center',
    },
    MainMenuBack: {
        height: 50,
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        overflow: 'hidden',
        alignContent: 'stretch',
        justifyContent: 'space-evenly',


        borderColor: 'white',
        shadowColor: 'white',
        elevation: 0.25,
    },
    MainMenuBack2: {
        borderColor: 'white',
        shadowColor: 'white',
        elevation: 1,
    },

    MainMenuButtonLegit: {
        width: 50,
        height: 50,
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        overflow: 'hidden',
        alignContent: 'stretch',
        justifyContent: 'space-evenly',
    },

    mmbutton: {
        width: 50,
        marginVertical: 10,
    },
    mmbuttonGlow: {
        width: 50,
        height: 50,
        alignSelf: 'center',
        marginVertical: 10,
        marginTop: -40,
        opacity: 1,
    },
    mmbuttonInactive: {
        width: 50,
        marginVertical: 10,
        opacity: 0.35,
    },
    mmsepv: {
        width: 0.5,
        opacity: 0.5,
    },

    body: {
        flex: 1,
        alignItems: 'center',
        overflow: 'scroll',
    },

    splashheader: {
        color: '#ffffff',
        fontFamily: 'AlegreyaSansBold',
        fontSize: 20,
    },

    splashdesc: {
        color: '#aaaaaa',
        fontFamily: 'OpenSansLight',
        fontSize: 16,
        margin: wwidth * 0.025,
        textAlign: 'center',
    },

    /* ======= SIDE MENU STYLES ======= */

    sidemenucore: {
        flex: 1,
        flexDirection: 'column',

        /*justifyContent:'space-between',*/
        margin: wwidth * 0.025,
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

    /* ======= App_ScreenHome.js STYLES ======= */

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

    body_home: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        height: wheight - 125,
    },

    home_buttons: {
        display: 'flex',
        justifyContent: 'center',
        width: wwidth * 0.25,
        overflow: 'hidden',
        transform: [{ scaleX: 0.85 }, { scaleY: 0.85 }],
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

    home_widgetarea: {
        margin: wwidth * 0.025,
    },

    body_list: {
        height: wheight - 125,
        position: 'relative',
        margin: wwidth * 0.025,
    },

    body_list_content: {
        position: 'relative',
        overflow: 'scroll',
    },

    home_dreamlist_itemname: {
        fontFamily: 'AlegreyaSansRegular',
        fontSize: 20,
        color: '#ffffff',
    },

    home_dreamlist_itemtype0: {
        fontFamily: 'AlegreyaSansRegular',
        fontSize: 14,
        color: '#aeaeae',
    },
    home_dreamlist_itemtype1: {
        fontFamily: 'AlegreyaSansRegular',
        fontSize: 14,
        color: '#8dd5ff',
    },
    home_dreamlist_itemtype2: {
        fontFamily: 'AlegreyaSansRegular',
        fontSize: 14,
        color: '#8fcc6e',
    },

    home_list_content: {
        marginTop: wwidth * 0.015,
        marginBottom: wwidth * 0.015,
        fontFamily: 'OpenSansLight',
        fontSize: 16,
        color: '#ffffff'
    },

    home_dreamreading_bottom: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignContent: 'center',
    },

    home_list_data: {
        flexGrow: 1,
        overflow: 'hidden',
    },

    home_list_desc: {
        fontFamily: 'OpenSansLight',
        fontSize: 12,
        color: 'rgba(200,200,200,0.65)',
    },

    home_dreamreading_buttonEdit: {
        width: wwidth * 0.0685,
        height: wwidth * 0.0685,
        marginRight: 10,
        opacity: 0.65,
    },

    searchbar_btn: {
        height: wwidth * 0.0685,
        width: wwidth * 0.0685,
        opacity: 0.5,
    },

    searchbar_text: {
        borderColor: '#eeeeee',
        borderBottomWidth: 0.25,
        paddingBottom: 6,
        marginLeft: wwidth * 0.015,

        fontFamily: 'OpenSansLight',
        fontSize: 16,
        color: '#eeeeee',
        height: wwidth * 0.0685,
        width: wwidth - (wwidth * 0.0685) - (wwidth * 0.025 * 2) - (wwidth * 0.015),
    },



    /* ======= TAGS STYLES ======= */

    body_tags: {
        margin: wwidth * 0.025,
        height: wheight - 125,
    },

    tags_scrollview: {
        flexDirection: 'column',
        flexWrap: 'wrap',
    },

    tags_header: {
        flex: 1,
        flexDirection: 'row',
        textAlignVertical: 'center',
        alignItems: 'center',
        maxWidth: wwidth - wwidth * 0.25,
        flexWrap: 'wrap',
    },

    tags_header_text: {
        color: '#ffffff',
        fontFamily: 'AlegreyaSansBold',
        fontSize: 18,
        textAlignVertical: 'center',
        textAlign: 'justify',
    },

    tags_tag: {
        color: 'rgba(255,255,255,0.8)',
        fontFamily: 'OpenSansLight',
        fontSize: 16,
        padding: wwidth * 0.0125,
        width: x50,
    },

    tags_icon: {
        width: 20,
        height: 20,
        marginLeft: 5,
        opacity: 0.65,
    },

    tags_icon_pick: {
        width: 20,
        height: 20,
        opacity: 0.65,
    },

    tags_list_icon: {
        width: 14,
        height: 14,
        opacity: 0.8,
    },

    tags_list_iconu: {
        width: 14,
        height: 14,
        opacity: 0.35,
        marginLeft: 2.5,
    },

    tags_list_iconu_noshade: {
        width: 14,
        height: 14,
        opacity: 0.85,
    },

    tags_listarea: {
        marginTop: wwidth * 0.025,
        marginBottom: wwidth * 0.025,
        marginLeft: wwidth * 0.05,
        marginRight: wwidth * 0.05,
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },

    tags_list_text: {
        fontFamily: 'OpenSansLight',
        fontSize: 12,
        color: '#dddddd',
        textDecorationLine: 'underline',
    },

    tags_newtag_window: {
        margin: wwidth * 0.05,
        marginTop: wwidth * 0.05 + 100,
        height: wheight - 125 - wwidth * 0.05,
        backgroundColor: 'rgba(37,35,35,0.95)',
        borderRadius: 10,
        padding: wwidth * 0.035,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },

    tags_newtag_window_actual: {
        width: x100,
        flex: 1,
    },

    tags_newtag_window_header: {
        fontFamily: 'AlegreyaSansBold',
        fontSize: 18,
        color: 'white',
        marginBottom: wwidth * 0.025,
    },

    tags_newtag_window_element: {
        marginTop: wwidth * 0.025,
    },

    tags_newtag_window_btn: {
        borderRadius: 10,
        padding: wwidth * 0.025,
        backgroundColor: 'rgba(120,120,120,0.35)',
        marginTop: wwidth * 0.025,
    },

    tags_newtag_btn_text: {
        color: 'white',
        fontFamily: 'AlegreyaSansBold',
        fontSize: 16,
        textAlign: 'center',
    },

    tags_viewtag_header: {
        color: '#ffffff',
        fontFamily: 'AlegreyaSansBold',
        fontSize: 18,
        textAlignVertical: 'center',
        textAlign: 'justify',
        marginLeft: 5,
    },

    tagimage: {
        resizeMode: 'contain',
        width: x100,
        height: wwidth * 0.5,
    },


    /* ======= DREAM ADD/EDIT STYLES ======= */

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
        marginBottom: wwidth * 0.025,
        position: 'relative',
    },

    adddream_options_note: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignContent: 'center',

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


    /* ======= SETTINGS STYLES ======= */

    body_settings: {
        height: wheight - 125,
        position: 'relative',
        margin: wwidth * 0.025,
    },

    body_settings_in: {
        marginTop: wwidth * 0.025,
        height: wheight - 175 + wwidth * 0.025,
    },

    settingstabs: {
        height: 50,
    },

    settings_item: {
        height: 50,
    },

    settings_item_name: {
        fontFamily: 'AlegreyaSansBold',
        fontSize: 18,
        color: 'white',
    },

    settings_item_desc: {
        fontFamily: 'OpenSansLight',
        fontSize: 14,
        color: '#d2d2d2',
        flexWrap: 'wrap',
    },

    settings_item_optiontext: {
        fontFamily: 'AlegreyaSansRegular',
        fontSize: 18,
        color: 'white',
    },

    checkbox_item: {
        flexDirection: 'row',
        alignItems: 'center',
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












    /* ======= COMPENDIUM STYLES ======= */

    body_compendium: {
        height: wheight - 125,
        position: 'relative',
        margin: wwidth * 0.025,
    },

    cmp_view: {
        height: wheight - 125,
    },

    cmp_list: {
        position: 'relative',
        overflow: 'scroll',
    },

    cmp_sep: {
        flex: 1,
        flexDirection: 'row',
    },

    cmp_sep_line: {
        borderColor: 'white',
        borderBottomWidth: 0.25,
        flexGrow: 1,
        height: 10,
    },

    cmp_sep_text: {
        fontFamily: 'AlegreyaSansLight',
        fontSize: 14,
        color: '#999999',
        marginLeft: wwidth * 0.025,
        marginRight: wwidth * 0.025,
    },

    cmp_article: {
        flex: 1,
        alignItems: 'center',
    },

    cmp_articlename: {
        fontFamily: 'AlegreyaSansRegular',
        fontSize: 20,
        color: 'white',
    },

    cmp_articledesc: {
        fontFamily: 'AlegreyaSansLight',
        fontSize: 14,
        color: 'white',
    },

    cmp_articleauth: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },

    cmp_articleauthtext: {
        fontFamily: 'OpenSansLight',
        fontSize: 10,
        color: 'white',
        opacity: 0.35,
    },

    cmp_articleauthtextH: {
        fontFamily: 'OpenSansLight',
        fontSize: 10,
        color: 'white',
        opacity: 0.65,
    },

    cmp_articlestatus: {
        width: 10,
        height: 10,
        marginLeft: 2,
        marginRight: 2,
        marginTop: 1,
        opacity: 0.8,
    },

    cmp_disclaimertest: {
        fontFamily: 'AlegreyaSansBold',
        fontSize: 16,
        color: 'white',
        alignSelf: 'center',
        capitalize: 'true',
        marginTop: -wwidth * 0.0125,
    },

    cmp_article_in_elementbold: {
        fontFamily: 'OpenSansRegular',
        fontSize: 14,
        color: '#ffffff'
    },

    /* ======= DS PAGE STYLES ======= */

    body_ds: {
        height: wheight - 125,
        position: 'relative',
        margin: wwidth * 0.025,
    },

    ds_header: {
        fontFamily: 'AlegreyaSansBold',
        fontSize: 18,
        color: 'white',
        marginTop: wwidth * 0.025,
        marginBottom: wwidth * 0.025,
    },

    ds_note: {
        fontFamily: 'OpenSansLight',
        fontSize: 14,
        color: 'rgba(200,200,200,0.85)',
        marginTop: 5,
    },



});