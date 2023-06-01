import { PostEdit } from "@/components/post";
import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export default async function PostAdd() {
  const createPost = async (post: Prisma.PostCreateInput) => {
    "use server";
    return await prisma.post.create({ data: post });
  };

  return (
    <div className="flex flex-col items-center w-full h-full p-10 ">
      <div className="text-2xl font-bold">Blog Posts</div>
      <PostEdit onSave={createPost} />
    </div>
  );
}
