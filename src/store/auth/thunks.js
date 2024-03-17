import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../api/api';

export const signUpThunk = createAsyncThunk(
  'auth/signUp',
  async (body, thunkAPI) => {
    try {
      const { data } = await api.post('/api/users/register', body);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const signInThunk = createAsyncThunk(
  'auth/signIn',
  async (body, thunkAPI) => {
    try {
      const { data } = await api.post('/api/users/login', body);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// export const currentThunk =
