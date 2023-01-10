interface InformationProps {
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
}

interface VerifyEmailProps {
  device_name: string;
  email: string;
}

interface ResetProps {
  device_name: string;
  email: string;
  session_id: string;
}

export type AuthRoutes = {
  Welcome: undefined;

  SignUp: undefined;
  Information: InformationProps;
  VerifyEmail: VerifyEmailProps;

  Login: undefined;
  Forgot: undefined;
  VerifyReset: VerifyEmailProps;
  Reset: ResetProps;
};
