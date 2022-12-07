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
}
