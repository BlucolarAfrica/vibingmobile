declare module 'api-response' {
  export interface ErrorResponse {
    data?: unknown;
    isSuccessful: boolean;
    message: string;
    errors: string[];
  }

  export interface APIResponse<X> {
    isSuccessful: boolean;
    message: string;
    errors: string[];
    data: X;
  }

  //VerifyEmail
  export interface VEData {
    data: string;
  }

  export interface VROData {
    session_id: string;
  }
}

declare module 'auth-models' {
  export interface LoginModel {
    email: string;
    password: string;
    device_name: string;
  }

  export interface SignupModel {
    email: string;
    full_name: string;
    phone_number: string;
    password: string;
    password_confirmation: string;
    device_name: string;
    gender: string;
  }

  //VerifyEmail
  export interface VEModel {
    otp_code: number;
    device_name: string;
    email: string;
  }

  //SendResetOTP
  export interface SROModel {
    email: string;
    device_name: string;
  }

  export interface RPModel {
    session_id: string;
    device_name: string;
    password: string;
    password_confirmation: string;
    email: string;
  }
}
