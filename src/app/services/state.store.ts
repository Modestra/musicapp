import { createSlice, configureStore } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'editable',
    initialState: {
        value: false
    },
    reducers: {
        setEdit: (state) => {
            state.value = !state.value
        },
    }
})

export const { setEdit } = counterSlice.actions

export const store = configureStore({ reducer: counterSlice.reducer })