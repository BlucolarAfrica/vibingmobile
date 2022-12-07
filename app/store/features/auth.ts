import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { authEndpoints } from 'service';

const initialState: AuthState = {
  isAuthenticated: false,
  token: null,
  user: null,
};

const { actions, reducer } = createSlice({
  extraReducers: builder => {
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
  },
});

export const { setAuthenticated } = actions;

export default reducer;
