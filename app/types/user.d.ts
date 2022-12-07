interface User {
  id: number;
  vuid: number;
  full_name: string;
  phone_number: string;
  email: string;
  gender?: string;
  profile_image?: string;
  email_verified_at?: Date | null;
  created_at: Date;
  deleted_at?: string;
}

interface UserResponse {
  user: User;
  token_type: string;
  token: string;
}
