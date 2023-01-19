import { StyleSheet, Dimensions } from 'react-native';
const wwidth = Dimensions.get("window").width;
const wheight = Dimensions.get("window").height;
export default StyleSheet.create({
    home_dreamlist_itemname: {
        fontFamily: 'AlegreyaSansRegular',
        fontSize: 20,
        color: '#ffffff',
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
    tags_header: {
        flex: 1,
        flexDirection: 'row',
        textAlignVertical: 'center',
        alignItems: 'center',
        maxWidth: wwidth - wwidth * 0.25,
        flexWrap: 'wrap',
    },
    home_list_desc: {
        fontFamily: 'OpenSansLight',
        fontSize: 12,
        color: 'rgba(200,200,200,0.65)',
    },
    tags_list_icon: {
        width: 14,
        height: 14,
        opacity: 0.8,
    },
    home_list_desc: {
        fontFamily: 'OpenSansLight',
        fontSize: 12,
        color: 'rgba(200,200,200,0.65)',
    },
    tags_list_text: {
        fontFamily: 'OpenSansLight',
        fontSize: 12,
        color: '#dddddd',
        textDecorationLine: 'underline',
    },
    tags_header: {
        flex: 1,
        flexDirection: 'row',
        textAlignVertical: 'center',
        alignItems: 'center',
        maxWidth: wwidth - wwidth * 0.25,
        flexWrap: 'wrap',
    },
    home_dreamreading_buttonEdit: {
        width: wwidth * 0.0685,
        height: wwidth * 0.0685,
        marginRight: 10,
        opacity: 0.65,
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



})
