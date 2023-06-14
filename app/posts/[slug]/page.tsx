import { PostCard } from "@/components/post";
import { getPost, getPostComments } from "@/lib/prisma/posts";

interface Props {
  params: { slug: string };
}

export default async function Post({ params }: Props) {
  const post = await getPost(params.slug);

  const comments = await getPostComments(params.slug);

  return (
    <div className="flex max-w-7xl justify-center p-10 space-y-10">
      {post ? <PostCard post={post} comments={comments} /> : "Not found post"}
    </div>
  );
}
