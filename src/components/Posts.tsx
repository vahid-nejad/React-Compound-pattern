import React from "react";
import { useUserPostQuery } from "../customHooks/queries";

interface Props {
  selectetdUserId: number;
}
const Posts = (props: Props) => {
  const { data: posts, isLoading } = useUserPostQuery(props.selectetdUserId);
  if (isLoading) return <p>Loading...</p>;
  return (
    <div className="border rounded shadow overflow-hidden ">
      <h6 className="p-2 bg-gradient-to-b from-sky-400 to-sky-600 text-white ">Posts Of The Selected User</h6>
      {posts?.map((post) => (
        <div key={post.id} className="m-1 border rounded shadow p-2 hover:bg-sky-100 transition">
          <div>
            <p className="text-slate-500">Title:</p>
            <p>{post.title}</p>
          </div>
          <p className="text-slate-500">Body:</p>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
