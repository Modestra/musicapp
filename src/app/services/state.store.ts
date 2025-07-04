import { createSlice, configureStore } from '@reduxjs/toolkit';


const counterSlice = createSlice({
    name: 'editable',
    initialState: {
        isEditable: false,
        tablesList: []
    },
    reducers: {
        setEdit: (state) => {
            state.isEditable = !state.isEditable
        },
        onDrugCategory: () => {

        }
    }
})

export const { setEdit, onDrugCategory } = counterSlice.actions

export const store = configureStore({ reducer: counterSlice.reducer })