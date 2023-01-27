import { useQuery } from "@tanstack/react-query";
import { Post, User } from "../intefaces";

export const usersQueryKey = "users";
export const PostQueryKey = "posts";
const BASE_URL = "http://localhost:8000/test";

const fetchUsers = async () => {
  const res = await fetch(BASE_URL + "/users");
  return await res.json();
};

const fetchPostOfUsers = async (userId: number) => {
  const res = await fetch(
    `${BASE_URL}/user/${userId}/posts`
  );
  return await res.json();
};

export const useUserQuery = () =>
  useQuery<User[]>([usersQueryKey], fetchUsers);

export const useUserPostQuery = (userId: number) =>
  useQuery<Post[]>([PostQueryKey, userId], () =>
    fetchPostOfUsers(userId)
  );
