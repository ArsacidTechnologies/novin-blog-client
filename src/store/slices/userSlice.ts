import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { GroupItemType, SignInRequest, UserType } from '@/src/shared/types';
import type { AppState, AppThunk } from '../store';

export interface UserState {
  role: userRole;
  phone: string;
}
export type userRole = 'choosing' | 'client' | 'approver' | 'subscriber'


const initialState: UserState = {
  role: 'choosing',
  phone: ''
}


export const userRolesArray: { label: string, value: string }[] = [
  {
    label: 'انتخاب کنید',
    value: 'choosing'
  },
  {
    label: 'نظر دهنده',
    value: 'client'
  },
  {
    label: 'تایید کننده',
    value: 'approver'
  },
  {
    label: 'لایک کننده',
    value: 'subscriber'
  },
];


// export const loginUser = createAsyncThunk(
//   'user/createUser',
//   async (userInfo: UserType) => {
//     const response:
//       | UserType
//       | {
//         error: {
//           errorCode: any;
//         };
//       } = await CreateUserApi(
//         String(localStorage?.getItem('access_token')),
//         userInfo,
//       );
//     return response;
//   },
// );

//--------------------------------------------------------------------------------//
export const userSlice = createSlice({
  name: 'user',
  initialState,

  reducers: {
    setUserRole: (state, action: PayloadAction<userRole>) => {
      state.role = action.payload;
    },
    setUserPhone: (state, action: PayloadAction<string>) => {
      state.phone = action.payload;
    },

  },
  extraReducers: (builder) => { },
});

export const {
  setUserRole,
  setUserPhone
} = userSlice.actions;
export const selectUserRole = (state: AppState) => state.user.role;
export const selectUserPhone = (state: AppState) => state.user.phone;


export default userSlice.reducer;
