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
  async ({ id, milliliters, time }, thunkApi) => {
    try {
      const { data } = await api.put(`water/${id}`, { milliliters, time });
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteWaterThunk = createAsyncThunk(
  'water/deleteWater',
  async (id, thunkApi) => {
    try {
      await api.delete(`water/${id}`);
      return id;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const editDailyNormaThunk = createAsyncThunk(
  'water/editDailyNorma',
  async (body, thunkApi) => {
    try {
      const { data } = await api.patch(`/users/`, body);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const fetchMonthWaterThunk = createAsyncThunk(
  'water/getMonthWater',
  async ({ year, month }, thunkApi) => {
    try {
      const { data } = await api.get(`water/month?year=${year}&month=${month}`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
