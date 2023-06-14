import { authOptions } from "@/app/api/auth/[...nextauth]";
import { PostEdit } from "@/components/post";
import { createPost } from "@/lib/prisma/posts";
import { Prisma } from "@prisma/client";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function PostAdd() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/signin?callbackUrl=/posts/add");
  }

  const onSaveHandler = async (post: Prisma.PostCreateInput) => {
    "use server";
    if (session.user?.id) {
      return await createPost(session.user.id, post);
    }
  };

  return (
    <div className="flex flex-col items-center w-full h-full mt-10">
      <div className="text-2xl font-bold mb-10">Add post</div>
      <PostEdit onSave={onSaveHandler} />
    </div>
  );
}
