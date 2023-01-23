import { TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux'
import styles from './DreamEditButton.styles'
import BtnDreamEdit from './../../../assets/images/icon_edit.svg';
import { setCurrentDream } from '../../../store/reducers/dreamsSlice';

const DreamEditButton = ({ dream, navigation }) => {
    const dispatch = useDispatch()

    const editHandler = () => {
        dispatch(setCurrentDream({ ...dream }))
        navigation.navigate('AddDreamMenu', { screen: "AddDream" })
    }

    return (
        <TouchableOpacity onPress={editHandler}>
            <BtnDreamEdit style={styles.home_dreamreading_buttonEdit} />
        </TouchableOpacity>
    )

}

export default DreamEditButton