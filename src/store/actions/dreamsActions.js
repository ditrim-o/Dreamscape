import { setDreams } from '../reducers/dreamsSlice'
import { storeData, getData, removeValue } from '../../localStorage/storage'

export const saveDreamsToLS = async () => {

}

export const getDreamsFromLS = () => {
    return async dispatch => {
        const data = await getData("@dreams")
        data ? dispatch(setDreams(data)) : null;
    }

}

export const clearDreams = () => {
    removeValue("@dreams")
}