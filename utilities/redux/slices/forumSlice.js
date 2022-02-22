import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchForums = createAsyncThunk(
    'course/fetchForums',
    async () => {
      const response = await fetch('https://api.itbook.store/1.0/new')
      .then(res => res.json())
      return response
    }
)

const forumSlice = createSlice({
    name: 'forum',
    initialState: {
        forumsList: [],
        status: 'idle',
    },
    reducers: {
        addTo: (state, action) => {
            // state.wishList.push(action.payload); 
        },
        removeFrom: (state, action) => {
            // state.wishList = state.wishList.filter(course => course.id !== action.payload);
        },
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchForums.fulfilled, (state, action) => {
          state.forumsList = action.payload;
          state.status = 'success';
        })
    },
});

// Action creators are generated for each case reducer function
export const { addTo, removeFrom } = forumSlice.actions;
export default forumSlice.reducer;