import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchUsers = createAsyncThunk(
    'user/fetchUsers',
    async () => {
        const response = await fetch('http://localhost:3000/api/users')
            .then(res => res.json())
        return response
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
            state.wishList.push(action.payload);
        },
        removeFrom: (state, action) => {
            state.wishList = state.wishList.filter(user => user.id !== action.payload);
        },
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.usersList = action.payload;
            state.status = 'success';
        })
    },
});

// Action creators are generated for each case reducer function
export const { addTo, removeFrom } = userSlice.actions;
export default userSlice.reducer;