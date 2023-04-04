import { useState } from "react";
import { Text, View, TouchableOpacity, Platform } from "react-native"
import styles from "./../AddDreamSettings.styles"
import dateSettingsStyles from './DateSettings.styles'
// import DateTimePicker from '@react-native-community/datetimepicker';
import Checkbox from "expo-checkbox";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentDream, setAddedDate, setDreamDate } from "../../../store/reducers/dreamsSlice";
import { useEffect } from "react";
import DatePicker from 'react-native-date-picker'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const DateSettings = () => {
    const [date, setDate] = useState(new Date())
    const [isDateUnknown, setIsDateUnknown] = useState(false)
    const [open, setOpen] = useState(false)

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

    const dateUnknownHandler = (e) => {
        setIsDateUnknown(!isDateUnknown)
    }

    const calcDate = () => {
        const date = currentDream.date;
        if (date && date != "unknown") {
            const dateObj = new Date(date)
            return `${dateObj.getMonth() + 1}-${dateObj.getDate()}-${dateObj.getFullYear()}`
        } else {
            return date
        }
    }

    return (
        <>
            <View style={styles.adddream_option}>
                <View style={styles.adddream_options_note}>
                    <Text style={styles.home_list_desc}>Date dream</Text>
                </View>
                <View style={dateSettingsStyles.DateSettings__container}>
                    <TouchableOpacity
                        onPress={() => { setOpen(true) }}
                    >
                        {currentDream.date && currentDream.date != "unknown" && <Text style={{ color: "white" }}>{calcDate()}</Text>}
                    </TouchableOpacity>
                    <DatePicker
                        modal
                        open={open}
                        date={date}
                        onConfirm={(date) => {
                            setOpen(false)
                            setDate(date)
                        }}
                        onCancel={() => {
                            setOpen(false)
                        }}
                    />
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