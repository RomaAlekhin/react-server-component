import { authOptions } from "@/app/api/auth/[...nextauth]";
import { PostEdit } from "@/components/post";
import { getPost, updatePost } from "@/lib/prisma/posts";
import { Prisma } from "@prisma/client";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

interface Props {
  params: { slug: string };
}

export default async function PostAdd({ params }: Props) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect(`/signin?callbackUrl=/posts/${params.slug}/edit`);
  }

  const post = await getPost(params.slug);

  const onSaveHandler = async (post: Prisma.PostCreateInput) => {
    "use server";
    return await updatePost(params.slug, post);
  };

  return (
    <div className="flex flex-col items-center w-full h-full mt-10">
      {post ? (
        <PostEdit post={post} onSave={onSaveHandler} />
      ) : (
        "Not found post"
      )}
    </div>
  );
}
