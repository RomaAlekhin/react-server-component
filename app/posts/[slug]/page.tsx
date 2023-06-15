import { Content } from "@/components/layout";
import { PostCard } from "@/components/post";
import { getPost, getPostComments } from "@/lib/prisma/posts";

interface Props {
  params: { slug: string };
}

export default async function Post({ params }: Props) {
  const post = await getPost(params.slug);

  const comments = await getPostComments(params.slug);

  return (
    <Content>
      {post ? <PostCard post={post} comments={comments} /> : "Not found post"}
    </Content>
  );
}
