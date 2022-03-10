import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUsers = createAsyncThunk(
    'user/fetchUsers',
    async () => {
        const response = await fetch('http://localhost:3000/api/users')
            .then(res => res.json())
        return response.data
    }
)

export const deleteUser = createAsyncThunk(
    'user/deleteUser',
    async (id) => {
        const response = await axios.delete(`http://localhost:3000/api/users/${id}`, id);
        return response.data
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState: {
        usersList: [],
        status: 'idle',
    },
    reducers: {
        addTo: (state, action) => {
            // state.wishList.push(action.payload);
        },
        removeFrom: (state, action) => {
            // state.wishList = state.wishList.filter(user => user.id !== action.payload);
        },
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.usersList = action.payload;
            state.status = 'success';
        })

        builder.addCase(deleteUser.fulfilled, (state, action) => {
            state.usersList = state.usersList.filter(user => user._id !== action.payload._id);
            state.status = 'success';
        })
    },
});

// Action creators are generated for each case reducer function
export const { addTo, removeFrom } = userSlice.actions;
export default userSlice.reducer;