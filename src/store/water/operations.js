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
