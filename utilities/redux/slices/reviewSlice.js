import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchReviews = createAsyncThunk(
    'review/fetchReviews',
    async () => {
        const response = await fetch('http://localhost:3000/api/reviews')
            .then(res => res.json())
        return response.data
    }
)

export const addReview = createAsyncThunk(
    'review/addReview',
    async (review) => {
        try {
            const response = await axios.post("http://localhost:3000/api/reviews", review);
            return response.data.data
        } catch (error) {
            console.log(error);
        }
    }
)

const reviewSlice = createSlice({
    name: 'review',
    initialState: {
        reviewsList: [],
        status: 'idle',
    },
    reducers: {
        addTo: (state, action) => {
            // state.wishList.push(action.payload); 
        },
        removeFrom: (state, action) => {
            // state.wishList = state.wishList.filter(review => review.id !== action.payload);
        },
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchReviews.fulfilled, (state, action) => {
            state.reviewsList = action.payload;
            state.status = 'success';
        })

        builder.addCase(addReview.fulfilled, (state, action) => {
            state.reviewsList = [...state.reviewsList, action.payload];
            state.status = 'success';
        })
    },
});

// Action creators are generated for each case reducer function
export const { addTo, removeFrom } = reviewSlice.actions;
export default reviewSlice.reducer;