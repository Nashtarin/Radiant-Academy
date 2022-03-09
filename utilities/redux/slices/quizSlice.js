import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchQuizzes = createAsyncThunk(
    'quiz/fetchQuizzes',
    async () => {
        const response = await fetch('http://localhost:3000/api/quizzes')
            .then(res => res.json())
        return response.data
    }
)

const quizSlice = createSlice({
    name: 'quiz',
    initialState: {
        quizzesList: [],
        answeredList: [],
        thisCourse: '',
        status: 'idle',
    },
    reducers: {
        addToAnsweredList: (state, action) => {
            state.answeredList.push(action.payload);
            // state.answeredList = [];
            // state.answeredList = state.answeredList.map(quiz => quiz._id === action.payload._id ? quiz : state.answeredList.push(action.payload));
            // state.answeredList = state.answeredList.filter(quiz => quiz._id !== action.payload);
        },
        clearAnsweredList: (state, action) => {
            state.answeredList = [];
        },
        removeFrom: (state, action) => {
            state.answeredList = state.answeredList.filter(course => course.id !== action.payload);
        },
        setWhichCourse: (state, action) => {
            state.thisCourse = action.payload;
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
export const { addToAnsweredList, clearAnsweredList, setWhichCourse } = quizSlice.actions;
export default quizSlice.reducer;