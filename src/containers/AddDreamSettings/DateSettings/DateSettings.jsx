import { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native"
import styles from "./../AddDreamSettings.styles"
import dateSettingsStyles from './DateSettings.styles'
import DateTimePicker from '@react-native-community/datetimepicker';
import Checkbox from "expo-checkbox";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentDream, setAddedDate, setDreamDate } from "../../../store/reducers/dreamsSlice";
import { useEffect } from "react";

const DateSettings = () => {
    const [date, setDate] = useState(new Date())
    const [isDateUnknown, setIsDateUnknown] = useState(false)

    const currentDream = useSelector(selectCurrentDream)
    const dispatch = useDispatch();

    useEffect(() => {
        if (currentDream.date && currentDream.date != "unknown") {
            setDate(new Date(currentDream.date))
        } else if (currentDream.date == "unknown") {
            setIsDateUnknown(true)
        } else {
            setDate(new Date())
        }

    }, [])

    useEffect(() => {
        isDateUnknown ? dispatch(setDreamDate("unknown")) : dispatch(setDreamDate(date))

    }, [date, isDateUnknown])


    const changeDate = (e, date) => {
        setDate(new Date(date))
    }
    const dateUnknownHandler = (e) => {
        setIsDateUnknown(!isDateUnknown)
    }

    return (
        <>
            <View style={styles.adddream_option}>
                <View style={styles.adddream_options_note}>
                    <Text style={styles.home_list_desc}>Date dream</Text>
                </View>
                <View style={dateSettingsStyles.DateSettings__container}>
                    {/* {!isDateUnknown ? <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={"date"}
                        is24Hour={true}
                        onChange={changeDate}
                        themeVariant={"dark"}
                        positiveButton={{ label: 'OK', textColor: 'green' }}
                    /> : null} */}

                    <View style={dateSettingsStyles.checkbox_container}>
                        <Checkbox
                            value={isDateUnknown}
                            onValueChange={(e) => { dateUnknownHandler(e) }}
                        />
                        <Text style={dateSettingsStyles.checkbox_text}>unknown</Text>

                    </View>

                </View>
            </View>

        </>

    )
}

export default DateSettings