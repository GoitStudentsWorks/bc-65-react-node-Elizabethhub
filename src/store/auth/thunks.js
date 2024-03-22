import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../api/api';
import { clearToken, setToken } from '../../helpers/Auth/setToken';

export const signUpThunk = createAsyncThunk(
  'auth/signUp',
  async (body, thunkAPI) => {
    try {
      const { data } = await api.post('users/register', body);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.message ?? error.message
      );
    }
  }
);
export const signInThunk = createAsyncThunk(
  'auth/signIn',
  async (body, thunkAPI) => {
    try {
      const { data } = await api.post('users/login', body);
      if (data) {
        setToken(data.token);
      }
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.message ?? error.message
      );
    }
  }
);

export const currentThunk = createAsyncThunk(
  '/api/users/current',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.token;

      if (token) {
        setToken(token);
      }

      const { data } = await api('users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.message ?? error.message
      );
    }
  }
);
export const logoutThunk = createAsyncThunk(
  '/api/users/logout',
  async (_, thunkAPI) => {
    try {
      const { data } = await api.post('users/logout');
      clearToken();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.message ?? error.message
      );
    }
  }
);

export const updateAvatarThunk = createAsyncThunk(
  'user/updateAvatar',
  async (body, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.token;
      if (token) {
        setToken(token);
      }
      const { data } = await api.patch('users/avatars', body, {
        headers: {
          'Content-type': 'multipart/form-data',
        },
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.message ?? error.message
      );
    }
  }
);
export const updateUserThunk = createAsyncThunk(
  'user/updateUser',
  async (body, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.token;

      if (token) {
        setToken(token);
      }

      const { data } = await api.patch('users/update-user', body);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.message ?? error.message
      );
    }
  }
);

export const forgotThunk = createAsyncThunk(
  'user/forgotPassword',
  async (body, thunkAPI) => {
    try {
      const { data } = await api.post('users/forgot-password', body);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.message ?? error.message
      );
    }
  }
);
export const updatePasswordThunk = createAsyncThunk(
  'user/updatePassword',
  async ({ tempCode, newPassword }, thunkAPI) => {
    try {
      const { data } = await api.post(
        `users/update-password/${tempCode.tempCode}`,
        { newPassword }
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.message ?? error.message
      );
    }
  }
);
