import { PostCard } from "@/components/post";
import { prisma } from "@/lib/prisma";
import { Post } from "@prisma/client";

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
    <div className="flex max-w-7xl justify-center p-10 space-y-10">
      {post ? <PostCard post={post} comments={comments} /> : "Not found post"}
    </div>
  );
}
