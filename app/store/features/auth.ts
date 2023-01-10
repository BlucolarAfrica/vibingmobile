import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { authEndpoints } from 'service';

const initialState: AuthState = {
  isAuthenticated: false,
  isOnboarded: true,
  token: null,
  user: null,
};

const { actions, reducer } = createSlice({
  extraReducers: builder => {
    builder.addMatcher(
      authEndpoints.signUp.matchFulfilled,
      (state, { payload }) => {
        console.log('USER Registered', payload.data);

        state.user = payload.data.user;
        state.token = payload.data.token;
      },
    );
    builder.addMatcher(
      authEndpoints.login.matchFulfilled,
      (state, { payload }) => {
        console.log('USER LOGGED IN', payload.data);

        state.user = payload.data.user;
        state.token = payload.data.token;
        state.isAuthenticated = true;
      },
    );
  },
  initialState,
  name: 'auth',
  reducers: {
    setAuthenticated: (state: AuthState, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
    setOnboarded: state => {
      state.isOnboarded = true;
    },
  },
});

export const { setAuthenticated, setOnboarded } = actions;

export default reducer;
