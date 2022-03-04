import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchQuizzes = createAsyncThunk(
    'quiz/fetchQuizzes',
    async () => {
        const response = await fetch('https://radiant-academy.vercel.app/api/quizzes')
            .then(res => res.json())
        return response
    }
)

const quizSlice = createSlice({
    name: 'quiz',
    initialState: {
        quizzesList: [],
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
        builder.addCase(fetchQuizzes.fulfilled, (state, action) => {
            state.quizzesList = action.payload;
            state.status = 'success';
        })
    },
});

// Action creators are generated for each case reducer function
export const { addTo, removeFrom } = quizSlice.actions;
export default quizSlice.reducer;