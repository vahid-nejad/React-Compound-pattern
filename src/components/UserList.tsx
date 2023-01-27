import React, { useState } from "react";
import { useUserQuery } from "../customHooks/queries";

interface Props {
  selectedUserId?: number;
  setSelectedUserId: (id: number) => void;
}
const UserList = (props: Props) => {
  const { data: users, isLoading } = useUserQuery();
  if (isLoading) return <p>Loading...</p>;
  return (
    <div className="border rounded shadow overflow-hidden">
      <h6 className="p-2 bg-gradient-to-b from-sky-400 to-sky-600 text-white">User List</h6>
      {users?.map((user) => (
        <p
          onClick={() => props.setSelectedUserId(user.id)}
          key={user.id}
          className={`p-2 hover:bg-sky-200 transition cursor-pointer ${
            props.selectedUserId === user.id
              ? "bg-gradient-to-b from-sky-500 to-sky-700 shadow-inner  text-white"
              : "odd:bg-sky-50"
          }`}
        >
          {user.name}
        </p>
      ))}
    </div>
  );
};

export default UserList;
