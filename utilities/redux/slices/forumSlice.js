import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchForums = createAsyncThunk(
    'forum/fetchForums',
    async () => {
      const response = await fetch('http://localhost:3000/api/forums')
      .then(res => res.json())
      return response
    }
)

// export const topicCreate = createAsyncThunk(
//     'forum/topicCreate',
//     async (forum) => {
//         let url = 'http://localhost:3000/api/forums';
//         const response = await fetch(url, {
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify(forum)
//         })
//         .then(res => res.json())
//         .then(data => {
//             if(data.insertedId){
//                 return forum
//             }else{
//                 console.log('No response!');
//             }
//         })
//         .catch((error) => {
//             console.log(error);
//         })
//         return response
//     }
// )

export const topicCreate = createAsyncThunk(
    'forum/topicCreate',
    async (forum) => {
        try {
            const res = await axios.post("http://localhost:3000/api/forums", forum);

        if (res.status === 200) {
            console.log(res);
            return res
        }
    
        } catch (error) {
            console.log(error);
        }
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

        builder.addCase(topicCreate.fulfilled, (state, action) => {
            // state.forumsList = [...state.forumsList, action.payload];
            state.status = 'success';
        })
    },
});

// Action creators are generated for each case reducer function
export const { addTo, removeFrom } = forumSlice.actions;
export default forumSlice.reducer;