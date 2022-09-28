import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const name = createSlice({
		name: 'userName',
    initialState: "",
    reducers: {
        setName: (state, action) => {
            return action.payload
        }
    }
})

export const { setName } = name.actions;

export default name.reducer;