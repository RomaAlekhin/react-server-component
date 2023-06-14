import { PostEdit } from "@/components/post";
import { getPost, updatePost } from "@/lib/prisma/posts";
import { Prisma } from "@prisma/client";

interface Props {
  params: { slug: string };
}
export default async function PostAdd({ params }: Props) {
  const post = await getPost(params.slug);

  const onSaveHandler = async (post: Prisma.PostCreateInput) => {
    "use server";
    return await updatePost(params.slug, post);
  };

  return (
    <div className="flex flex-col items-center w-full h-full mt-10">
      <div className="text-2xl font-bold mb-10">Edit post</div>
      {post ? (
        <PostEdit post={post} onSave={onSaveHandler} />
      ) : (
        "Not found post"
      )}
    </div>
  );
}
