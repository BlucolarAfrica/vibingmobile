import type {
  LoginModel,
  RPModel,
  SROModel,
  SignupModel,
  VEModel,
} from 'auth-models';
import type { APIResponse, VEData, VROData } from 'api-response';

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
    logout: builder.query<APIResponse<void>, void>({
      query: () => 'logout',
    }),
    resendEmailOTP: builder.mutation<APIResponse<void>, { deviceName: string }>(
      {
        query: ({ deviceName }) => ({
          method: 'GET',
          url: `resend-verification-code?device_name=${deviceName}`,
        }),
      },
    ),
    resetPassword: builder.mutation<APIResponse<void>, RPModel>({
      query: body => ({
        body,
        method: 'POST',
        url: 'password-reset/send-otp',
      }),
    }),
    sendResetOTP: builder.mutation<APIResponse<void>, SROModel>({
      query: body => ({
        body,
        method: 'POST',
        url: 'password-reset/send-otp',
      }),
    }),
    signUp: builder.mutation<APIResponse<UserResponse>, SignupModel>({
      query: body => ({
        body,
        method: 'POST',
        url: 'register',
      }),
    }),
    verifyEmail: builder.mutation<APIResponse<VEData>, VEModel>({
      query: body => {
        return {
          body,
          method: 'POST',
          url: 'verify-email',
        };
      },
    }),
    verifyResetOTP: builder.mutation<APIResponse<VROData>, VEModel>({
      query: body => ({
        body,
        method: 'POST',
        url: 'password-reset/confirm-otp',
      }),
    }),
  }),
  overrideExisting: true,
});

export const {
  endpoints: authEndpoints,
  useLoginMutation,
  useSignUpMutation,
  useResendEmailOTPMutation,
  useResetPasswordMutation,
  useSendResetOTPMutation,
  useVerifyEmailMutation,
  useVerifyResetOTPMutation,
  useLogoutQuery,
} = authenticationEndpoints;
