import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { AppStateType } from 'store/store';

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.vibing.xyz/api/mobile/',
    prepareHeaders: (header, { getState }) => {
      const token = (getState() as AppStateType).auth.token;
      token && header.set('Authorization', `Bearer ${token}`);

      return header;
    },
  }),
  endpoints: builder => ({
    getToken: builder.query<void, void>({
      query: () => ({
        method: 'GET',
        url: '',
      }),
    }),
  }),
  tagTypes: ['GetProfile'],
});

export const {
  reducer: apiReducer,
  reducerPath: apiReducerPath,
  middleware: apiMiddleware,
  injectEndpoints,
  endpoints,
  useGetTokenQuery,
} = api;
