import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { GroupItemType, SignInRequest, UserType } from '@/src/shared/types';
import type { AppState, AppThunk } from '../store';

export interface UserState {
  isLoading: boolean;
}
export type userRole = 'choosing' | 'client' | 'approver' | 'subscriber'
export type loginOrSignUpType = 'login' | 'signup'

const initialState: UserState = {
  isLoading: true
}
//--------------------------------------------------------------------------------//
export const settingSlice = createSlice({
  name: 'setting',
  initialState,

  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => { },
});

export const {
  setIsLoading,

} = settingSlice.actions;
export const selectAllSetting = (state: AppState) => state.setting;
export const selectIsLoading = (state: AppState) => state.setting.isLoading;


export default settingSlice.reducer;
