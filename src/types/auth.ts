export interface User {
  name: string;
  email: string;
}

export interface AuthResponse {
  message: string;
  user: User;
}

export interface MeResponse {
  name: string;
  email: string;
}
