import type { LoginModel, SignupModel } from 'auth-models';
import type { APIResponse } from 'api-response';

import { injectEndpoints } from '../config';

const authenticationEndpoints = injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation<APIResponse<UserResponse>, LoginModel>({
      query: body => ({
        body,
        method: 'POST',
        url: 'login',
      }),
    }),
    signUp: builder.mutation<APIResponse<UserResponse>, SignupModel>({
      query: body => ({
        body,
        method: 'POST',
        url: 'register',
      }),
    }),
  }),
  overrideExisting: true,
});

export const {
  endpoints: authEndpoints,
  useLoginMutation,
  useSignUpMutation,
} = authenticationEndpoints;
