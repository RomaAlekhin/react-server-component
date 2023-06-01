import { prisma } from "@/lib/prisma";
import { Comment, Post } from "@prisma/client";
import { Suspense } from "react";

interface BlogPostProps {
  post: Post;
}

function BlogPost({ post }: BlogPostProps) {
  return (
    <>
      <h1 className="text-2xl font-bold text-center">{post.title}</h1>
      <p className="text-lg">{post.content}</p>
    </>
  );
}

interface CommentsProps {
  comments: Comment[];
}

function Comments({ comments }: CommentsProps) {
  return (
    <>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <p>{comment.message}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

interface Props {
  params: { slug: string };
}

export default async function Post({ params }: Props) {
  const post = await prisma.post.findUnique({
    where: {
      id: params.slug,
    },
  });

  const comments = await prisma.comment.findMany({
    where: {
      postId: params.slug,
    },
  });

  return (
    <div className="flex flex-col max-w-7xl p-10 space-y-10">
      <Suspense fallback={<div>Loading Comments..</div>}>
        {post ? <BlogPost post={post} /> : "Not found post"}
      </Suspense>

      <h2 className="text-xl">Comments</h2>
      <Suspense fallback={<div>Loading Comments..</div>}>
        {comments && comments.length ? (
          <Comments comments={comments} />
        ) : (
          "Not found comments"
        )}
      </Suspense>
    </div>
  );
}
