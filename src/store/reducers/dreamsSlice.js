import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    dreams: [
        {
            id: 1,
            name: "magicDream",
            text: "dream text dream text dream text dream text",
            tags: ["tag1", "tag2"],
            date: "01.01.2023",
            type: "importancy"
        }
    ]
}

export const dreamSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setDreams: (state, action) => {
            state.dreams = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = dreamSlice.actions
export const selectDreams = (state) => state.dreams
export default dreamSlice.reducer