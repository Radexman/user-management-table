import { User, usersSchema } from './../../types/user.type';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import type { RootState } from '../../app/store';

const url = import.meta.env.VITE_API_URL;

// Define a type for the slice state
interface UserState {
  users: User[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

// Define the initial state using that type
const initialState: UserState = {
  users: [],
  status: 'idle',
  error: null,
};

// Async thunk to fetch users
export const fetchUsers = createAsyncThunk<User[]>('users/fetchUsers', async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    // Validate response data using Zod
    const validateUsers = usersSchema.parse(response.data);
    return validateUsers;
  } catch (error) {
    throw error;
  }
});

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.status = 'succeeded';
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch users';
      });
  },
});

export const selectUsers = (state: RootState) => state.users.users;
export const selectUserStatus = (state: RootState) => state.users.status;

export default userSlice.reducer;
