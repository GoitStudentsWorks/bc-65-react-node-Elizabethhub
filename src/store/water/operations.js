import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../configAxios/configAxios';

export const addWaterThunk = createAsyncThunk(
  'addWater',
  async (water, thunkApi) => {
    try {
      const { data } = await api.post('/api/home', water);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchAllWaterThunk = createAsyncThunk(
  'fetchAll',
  async (_, thunkApi) => {
    try {
      const { data } = await api.get('/api/home');
      console.log(data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);