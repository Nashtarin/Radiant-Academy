import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCourses = createAsyncThunk(
    'course/fetchCourses',
    async () => {
        const response = await fetch('http://localhost:3000/api/courses')
            .then(res => res.json())
        return response.data
    }
)

export const deleteCourse = createAsyncThunk(
    'course/deleteCourse',
    async (id) => {
        const response = await axios.delete(`http://localhost:3000/api/courses/${id}`, id);
        return response.data
    }
)

export const courseCreate = createAsyncThunk(
    'course/courseCreate',
    async (course) => {
        try {
            const response = await axios.post("http://localhost:3000/api/courses", course);
            return response.data.data
        } catch (error) {
            console.log(error);
        }
    }
)

export const updateCourse = createAsyncThunk(
    'course/updateCourse',
    async (course) => {
        try {
            const response = await axios.put(`http://localhost:3000/api/courses/edit/${course._id}`, course);
            return course
        } catch (error) {
            console.log(error);
        }
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
        addToWishlist: (state, action) => {
            state.wishList.push(action.payload);
        },
        removeFromWishList: (state, action) => {
            state.wishList = state.wishList.filter(course => course._id !== action.payload);
        },
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchCourses.fulfilled, (state, action) => {
            state.coursesList = action.payload;
            state.status = 'success';
        })

        builder.addCase(deleteCourse.fulfilled, (state, action) => {
            state.coursesList = state.coursesList.filter(course => course._id !== action.payload._id);
            state.status = 'success';
        })

        builder.addCase(courseCreate.fulfilled, (state, action) => {
            state.coursesList = [...state.coursesList, action.payload];
            state.status = 'success';
        })

        builder.addCase(updateCourse.fulfilled, (state, action) => {
            state.coursesList = state.coursesList.map(course => course._id === action.payload._id ? {
                ...course,
                title: action.payload.title,
                subtitle: action.payload.subtitle,
                category: action.payload.category,
                desc: action.payload.desc,
                price: action.payload.price,
            } : course);
            state.status = 'success';
        })
    },
});

// Action creators are generated for each case reducer function
export const { addToWishlist, removeFromWishList } = courseSlice.actions;
export default courseSlice.reducer;