import { PostEdit } from "@/components/post";
import { createPost } from "@/lib/actions";
import { Prisma } from "@prisma/client";

export default function PostAdd() {
  const onSaveHandler = async (post: Prisma.PostCreateInput) => {
    "use server";
    return await createPost(post);
  };

  return (
    <div className="flex flex-col items-center w-full h-full mt-10">
      <div className="text-2xl font-bold mb-10">Add post</div>
      <PostEdit onSave={onSaveHandler} />
    </div>
  );
}
