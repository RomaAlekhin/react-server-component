import { Comment } from "@prisma/client";
import { FC } from "react";

interface PostCommentProps {
  comment: Comment;
}

export const PostComment: FC<PostCommentProps> = ({ comment }) => {
  return (
    <div className="flex flex-col gap-y-2">
      <p className="text-base">{comment.message}</p>
      <p className="text-xs">{comment.createdAt.toLocaleString()}</p>
    </div>
  );
};
