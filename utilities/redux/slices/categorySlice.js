import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchCategories = createAsyncThunk(
    'category/fetchCategories',
    async () => {
        const response = await fetch('https://radiant-academy.vercel.app/api/categories')
            .then(res => res.json())
        return response
    }
)

const categorySlice = createSlice({
    name: 'category',
    initialState: {
        categoriesList: [],
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
        builder.addCase(fetchCategories.fulfilled, (state, action) => {
            state.categoriesList = action.payload;
            state.status = 'success';
        })
    },
});

// Action creators are generated for each case reducer function
export const { addTo, removeFrom } = categorySlice.actions;
export default categorySlice.reducer;