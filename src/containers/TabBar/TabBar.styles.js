import { StyleSheet, Dimensions } from 'react-native';
export default StyleSheet.create({
    TabBar__View: {
        flexDirection: 'row',
        borderColor: 'white',
        shadowColor: 'white',
        overflow: 'hidden',
        alignContent: 'stretch',
        justifyContent: 'space-evenly',
        marginTop: 1,
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
})


