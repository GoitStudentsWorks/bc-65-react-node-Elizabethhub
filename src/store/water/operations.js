import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../api/api';

export const addWaterThunk = createAsyncThunk(
  'water/addWater',
  async (body, thunkApi) => {
    try {
      const { data } = await api.post('water/addWater', body);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchAllWaterThunk = createAsyncThunk(
  'water/getAllWater',
  async (_, thunkApi) => {
    try {
      const { data } = await api.get('water/');
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const editWaterThunk = createAsyncThunk(
  'water/editWater',
  async ({ id, water }, thunkApi) => {
    try {
      const { data } = await api.put(`water/${id}`, water);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
