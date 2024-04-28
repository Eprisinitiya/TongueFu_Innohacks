import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchTwisterEnglish } from './tongueAPI';

const initialState = {  
  englishTwister: [],
  status: 'idle', // Added status property to initialState
};

export const fetchTwisterEnglishAsync = createAsyncThunk(
  'tongue/fetchTwisterEnglish', 
  async () => {
    const response = await fetchTwisterEnglish();
    return response.data;
  }
);

export const tongueSlice = createSlice({
  name: 'tongue', 
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTwisterEnglishAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTwisterEnglishAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.englishTwister = action.payload; 
      });
  },
});

export const { increment } = tongueSlice.actions; 

export const selectTwisterEnglish = (state) => state.tongue.englishTwister; 

export default tongueSlice.reducer; 
