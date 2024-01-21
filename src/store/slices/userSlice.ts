import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { GroupItemType, SignInRequest, UserType } from '@/src/shared/types';
import type { AppState, AppThunk } from '../store';
import { User } from '@/src/shared/types/posts';
import { QueryUserByRoleItIsTemporary } from '../api/userApi';

export interface UserState {
  user: User
  role: userRoleType;
  phone: string;
  loginOrSignUp: loginOrSignUpType
  apiStatus: 'idle' | 'success' | 'err' | 'pending'
  errMessage: string
}
export type userRoleType = 'choosing' | 'client' | 'approver' | 'subscriber'
export type loginOrSignUpType = 'login' | 'signup'


const initialState: UserState = {
  role: 'choosing',
  user: {},
  phone: '',
  loginOrSignUp: 'login',
  apiStatus: 'idle',
  errMessage: ""
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

export const userRoles = [
  "client",
  "approver",
  "subscriber"
]

export const loginUser = createAsyncThunk(
  'user/createUser',
  async (userRole: string) => {
    const response:
      | User
      | string
      = await QueryUserByRoleItIsTemporary(
        userRoles.findIndex(u => u === userRole)
      );
    return response;
  },
);

//--------------------------------------------------------------------------------//
export const userSlice = createSlice({
  name: 'user',
  initialState,

  reducers: {
    setUserRole: (state, action: PayloadAction<userRoleType>) => {
      state.role = action.payload;
    },
    setUserPhone: (state, action: PayloadAction<string>) => {
      state.phone = action.payload;
    },
    setUserLoginOrSignUp: (state, action: PayloadAction<loginOrSignUpType>) => {
      state.loginOrSignUp = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.apiStatus = "pending";
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.apiStatus = "err";
        state.errMessage = (action.payload as string)
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.apiStatus = "success";
        state.user = (action.payload as User);
      })
  },
});

export const {
  setUserRole,
  setUserPhone,
  setUserLoginOrSignUp,
} = userSlice.actions;
export const selectUserRole = (state: AppState) => state.user.role;
export const selectUserErrMessage = (state: AppState) => state.user.errMessage;
export const selectUser = (state: AppState) => state.user.user;
export const selectUserApiStatus = (state: AppState) => state.user.apiStatus;
export const selectUserPhone = (state: AppState) => state.user.phone;
export const selectUserLoginOption = (state: AppState) => state.user.loginOrSignUp;


export default userSlice.reducer;
