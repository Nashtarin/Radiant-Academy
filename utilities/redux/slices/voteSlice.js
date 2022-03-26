import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchVotes = createAsyncThunk(
    'vote/fetchVotes',
    async () => {
        const response = await fetch('http://localhost:3000/api/vote')
            .then(res => res.json())
        return response.data
    }
)

export const dropVote = createAsyncThunk(
    'vote/dropVote',
    async (vote) => {
        try {
            const response = await axios.put(`http://localhost:3000/api/vote/${vote._id}`);
            return response.data
        } catch (error) {
            console.log(error);
        }
    }
)

const voteSlice = createSlice({
    name: 'vote',
    initialState: {
        votesList: [],
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
        builder.addCase(fetchVotes.fulfilled, (state, action) => {
            state.votesList = action.payload;
            state.status = 'success';
        })

        builder.addCase(dropVote.fulfilled, (state, action) => {
            state.votesList = state.votesList.map(vote => vote._id === action.payload._id ? { ...vote, votesTotal: vote.votesTotal + 1 } : vote);
            state.status = 'success';
        })
    },
});

// Action creators are generated for each case reducer function
export const { addTo, removeFrom } = voteSlice.actions;
export default voteSlice.reducer;