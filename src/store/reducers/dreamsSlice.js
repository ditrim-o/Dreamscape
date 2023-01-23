import { createSlice } from '@reduxjs/toolkit'
import { storeData } from './../../localStorage/storage'

const initialState = {
    dreams: [
    ],
    currentDream: {
        id: null,
        name: "",
        text: "",
        tags: [],
        date: "",
        addedDate: "",
        type: "Unspecified",
        script: ""
    },
    editedDreamID: null,
    defaultCurrentDream: {
        id: null,
        name: "",
        text: "",
        tags: [],
        date: new Date(),
        addedDate: new Date(),
        type: "Unspecified",
        script: ""
    }
}

export const dreamSlice = createSlice({
    name: 'dreams',
    initialState,
    reducers: {
        setDreams: (state, action) => {
            //action.payload.forEach(item => { console.warn(item.type); })
            state.dreams = action.payload
            storeData("@dreams", action.payload)
        },
        setCurrentDream: (state, action) => {

            state.currentDream = action.payload
        },
        setDreamDate: (state, action) => {
            state.currentDream.date = action.payload
        },
        setAddedDate: (state, action) => {
            state.currentDream.addedDate = action.payload
        },
        setDreamName: (state, action) => {
            state.currentDream.name = action.payload
        },
        setDreamText: (state, action) => {
            state.currentDream.text = action.payload
        },
        setDreamTags: (state, action) => {
            state.currentDream.tags = action.payload
        },
        setDreamType: (state, action) => {
            state.currentDream.type = action.payload
        },
        setDreamScript: (state, action) => {
            state.currentDream.script = action.payload
        },
        setEditedDreamID: (state, action) => {
            state.editedDreamID = action.payload
        },
        resetCurrent: (state) => {
            state.currentDream = state.defaultCurrentDream
        }
    },
})

// Action creators are generated for each case reducer function
export const {
    setDreams,
    setDreamDate,
    setDreamName,
    setDreamScript,
    setDreamTags,
    setDreamText,
    setDreamType,
    setEditedDreamID,
    setCurrentDream,
    resetCurrent,
    setAddedDate
} = dreamSlice.actions
export const selectDreams = (state) => state.dreams.dreams
export const selectCurrentDream = (state) => state.dreams.currentDream
export const selectEditedDreamID = (state) => state.dreams.editedDreamID
export default dreamSlice.reducer