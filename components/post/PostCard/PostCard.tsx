"use client";

import { FC } from "react";
import { Comment, Post } from "@prisma/client";
import { PostComment } from "./PostComment";
import { Edit } from "lucide-react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Props {
  post: Post;
  comments: Comment[];
}

export const PostCard: FC<Props> = ({ post, comments }) => {
  const { data: session } = useSession();

  const showEditButton = session?.user?.id === post.authorId;

  return (
    <Card>
      <CardHeader className="relative">
        {!showEditButton ? (
          <div className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none cursor-pointer">
            <Link href={`/posts/${post.id}/edit`}>
              <Edit className="h-6 w-6" />
            </Link>
            <span className="sr-only">Edit</span>
          </div>
        ) : null}

        <CardTitle>
          <h1 className="text-2xl font-bold">{post.title}</h1>
        </CardTitle>

        <CardDescription>{post.createdAt.toLocaleString()}</CardDescription>
      </CardHeader>

      <CardContent>
        <p className="text-lg">{post.content}</p>
      </CardContent>

      <CardFooter>
        <div className="mt-4">
          <Button>
            <Link href={`/posts/${post.id}/comment`}>Leave a comment</Link>
          </Button>
        </div>

        {comments.length > 0 && (
          <div className="p-2 flex flex-col gap-y-4">
            <p className="text-xl font-bold">Comments:</p>
            {comments.map((comment) => (
              <PostComment key={comment.id} comment={comment} />
            ))}
          </div>
        )}
      </CardFooter>
    </Card>
  );
};
