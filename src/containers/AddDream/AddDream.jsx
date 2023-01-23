import { useEffect, useState } from "react";
import { TextInput, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentDream, selectDreams, setAddedDate, setDreamDate, setDreamName, setDreamText } from "../../store/reducers/dreamsSlice";
import styles from './AddDream.styles'


const AddDream = ({ }) => {
    const dispatch = useDispatch();
    const currentDream = useSelector(selectCurrentDream)
    const name = currentDream.name
    const text = currentDream.text

    // useEffect(() => {
    //     !currentDream.addedDate ? dispatch(setAddedDate(new Date())) : null
    //     !currentDream.date ? dispatch(setDreamDate(new Date())) : null
    // }, [currentDream])

    return (
        <View style={styles.body_adddream}>

            <TextInput
                style={styles.adddream_inputName}
                value={name}
                onChangeText={(name) => dispatch(setDreamName(name))}
                placeholder={'Enter dream name...'}
                placeholderTextColor={'rgba(200,200,200,0.35)'}
                cursorColor={'white'}
            />
            <TextInput
                multiline={true}
                value={text}
                onChangeText={(text) => dispatch(setDreamText(text))}
                numberOfLines={10}
                placeholder={'Content...'}
                placeholderTextColor={'rgba(200,200,200,0.35)'}
                style={styles.adddream_inputContent}
            />
        </View>
    );
}

export default AddDream