import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface User {
  id: number;
  title: string;
  name: string;
  image: string;
  description: string;
  price: number;
  category: string;
  rating: number;
  // Add other properties as needed
}

interface UserState {
  data: User[] | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: UserState = {
  data: null,
  status: 'idle',
  error: null,
};

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  try {
    console.log('Fetching users...');
    const response = await axios.get('https://fakestoreapi.com/products');
    console.log('Received response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error; // Rethrow the error to be handled by the rejection case
  }
});

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Something went wrong.';
      });
  },
});

export default userSlice.reducer;
