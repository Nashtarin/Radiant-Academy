import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchCourses = createAsyncThunk(
    'course/fetchCourses',
    async () => {
      const response = await fetch('https://api.itbook.store/1.0/new')
      .then(res => res.json())
      return response
    }
)

const courseSlice = createSlice({
    name: 'course',
    initialState: {
        coursesList: [],
        wishList: [],
        status: 'idle',
    },
    reducers: {
        addTo: (state, action) => {
            state.wishList.push(action.payload); 
        },
        removeFrom: (state, action) => {
            state.wishList = state.wishList.filter(course => course.id !== action.payload);
        },
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchCourses.fulfilled, (state, action) => {
          state.coursesList = action.payload;
          state.status = 'success';
        })
    },
});

// Action creators are generated for each case reducer function
export const { addTo, removeFrom } = courseSlice.actions;
export default courseSlice.reducer;