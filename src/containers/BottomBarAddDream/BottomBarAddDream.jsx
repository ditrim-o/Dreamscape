import styles from './BottomBarAddDreamStyles'
import AddButtonNext from './../../assets/images/add_addnext.svg';
import AddButtonSave from './../../assets/images/add_save.svg';

import { Button, TouchableOpacity, View } from 'react-native';
import AddDreamBarBtn from '../../components/AddDreamBarBtn/AddDreamBarBtn';
import { useDispatch, useSelector } from 'react-redux';
import { resetCurrent, selectCurrentDream, selectDreams, setDreams, setAddedDate } from '../../store/reducers/dreamsSlice';
import { getDreamsFromLS } from '../../store/actions/dreamsActions';
import { useEffect } from 'react';
import 'react-native-get-random-values'
import { nanoid } from 'nanoid'

const BottomBarAddDream = ({ state, descriptors, navigation, position }) => {
    const currentDream = { ...useSelector(selectCurrentDream) }
    const dreams = useSelector(selectDreams)
    const dispatch = useDispatch()

    const saveDream = () => {
        if (currentDream.id) {
            let newDreams = dreams.map(item => item.id === currentDream.id ? currentDream : item)
            dispatch(setDreams(newDreams))
            navigation.navigate("DreamList")
        } else {
            let newDreams = [...dreams]
            currentDream.id = nanoid()
            newDreams.push(currentDream)
            dispatch(setDreams(newDreams))
            navigation.navigate("DreamList")
        }
    }


    const showDreams = () => {
        console.warn(dreams);
    }

    return (
        <View style={styles.container}>
            <View style={styles.buttons_wrapper}>
                <TouchableOpacity
                    onPress={e => { saveDream() }}
                >
                    <View style={styles.addream_button} title={""}><AddButtonNext /></View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={e => { showDreams() }}
                >
                    <View style={styles.addream_button}><AddButtonSave /></View>
                </TouchableOpacity>


            </View>
            <View style={styles.buttons_wrapper}>
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const isFocused = state.index === index;
                    return (
                        <AddDreamBarBtn
                            navigation={navigation}
                            index={index}
                            route={route}
                            isFocused={isFocused}
                            options={options}
                            key={index}
                        />
                    );
                })}
            </View>

        </View>
    );
}

export default BottomBarAddDream