"use client";

import { FC } from "react";
import { Comment, Post } from "@prisma/client";
import { PostComment } from "./PostComment";
import { Edit } from "lucide-react";
import Link from "next/link";

interface Props {
  post: Post;
  comments: Comment[];
}

export const PostCard: FC<Props> = ({ post, comments }) => {
  return (
    <div className="relative bg-card-foreground text-card md:w-1/2 w-full rounded-xl shadow-md p-8 flex flex-col gap-y-2">
      <div className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none cursor-pointer">
        <Link href={`/posts/${post.id}/edit`}>
          <Edit className="h-6 w-6" />
        </Link>
        <span className="sr-only">Close</span>
      </div>
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p className="text-lg">{post.content}</p>
      <p className="text-xs">{post.createdAt.toLocaleString()}</p>

      {comments.length > 0 && (
        <div className="p-2 flex flex-col gap-y-4">
          <p className="text-xl font-bold">Comments:</p>
          {comments.map((comment) => (
            <PostComment key={comment.id} comment={comment} />
          ))}
        </div>
      )}
    </div>
  );
};
