export interface User {
  id: number;
  userName: string;
  name: string;
}

export interface Post {
  id: number;
  user: User;
  title: string;
  body: string;
}
