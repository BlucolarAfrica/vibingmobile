type AuthState = {
  isAuthenticated: boolean;
  isOnboarded: boolean;
  token: string | null;
  user: User | null;
};
