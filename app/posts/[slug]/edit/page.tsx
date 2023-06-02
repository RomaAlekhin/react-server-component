import { PostEdit } from "@/components/post";
import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

interface Props {
  params: { slug: string };
}
export default async function PostAdd({ params }: Props) {
  const post = await prisma.post.findUnique({
    where: {
      id: params.slug,
    },
  });

  const updatePost = async (post: Prisma.PostCreateInput) => {
    "use server";

    return await prisma.post.update({
      where: {
        id: params.slug,
      },
      data: post,
    });
  };

  return (
    <div className="flex flex-col items-center w-full h-full p-10">
      <div className="text-2xl font-bold mb-10">Edit post</div>
      {post ? <PostEdit post={post} onSave={updatePost} /> : "Not found post"}
    </div>
  );
}
