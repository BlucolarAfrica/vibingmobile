interface InformationProps {
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
}

export type AuthRoutes = {
  Welcome: undefined;

  SignUp: undefined;
  Information: InformationProps;
  VerifyEmail: undefined;

  Login: undefined;
  Forgot: undefined;
  Reset: undefined;
};
