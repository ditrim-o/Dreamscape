import { StyleSheet, Dimensions } from 'react-native';
const wwidth = Dimensions.get("window").width;
const wheight = Dimensions.get("window").height;
export default StyleSheet.create({
    body_list: {
        height: wheight - 125,
        position: 'relative',
        margin: wwidth * 0.025,
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
    body_list_content: {
        position: 'relative',
        overflow: 'scroll',
    },
    search_container: {
        flex: 0,
        flexDirection: 'row',
        marginBottom: wwidth * 0.0685 + wwidth * 0.025,
    },

})
