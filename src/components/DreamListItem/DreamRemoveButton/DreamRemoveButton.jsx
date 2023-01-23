import { TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import styles from './DreamRemoveButton.styles'
import { selectDreams, setCurrentDream, setDreams } from '../../../store/reducers/dreamsSlice';
import BtnDelete from './../../../assets/images/icon_delete.svg';

const DreamRemoveButton = ({ dream }) => {
    const dispatch = useDispatch()
    const dreams = useSelector(selectDreams)

    const removeHandler = () => {
        const newDreams = dreams.filter(item => item.id != dream.id)
        dispatch(setDreams(newDreams))
    }

    return (
        <TouchableOpacity onPress={removeHandler}>
            <BtnDelete style={styles.home_dreamreading_buttonEdit} />
        </TouchableOpacity>
    )

}

export default DreamRemoveButton