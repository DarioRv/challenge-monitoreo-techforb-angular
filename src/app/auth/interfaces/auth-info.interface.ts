export interface AuthInfo {
  user: User;
  token: string;
}

export interface User {
  id: string;
  username: string;
  name: string;
}
