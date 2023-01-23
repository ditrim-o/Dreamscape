import { StyleSheet, Dimensions } from 'react-native';
const wwidth = Dimensions.get("window").width;
const wheight = Dimensions.get("window").height;
export default StyleSheet.create({
    body_adddream: {
        margin: wwidth * 0.025,
        position: 'relative',
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

})
