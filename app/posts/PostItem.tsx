import { Post, User } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface Props {
  post: Post & {
    author: User | null;
  };
}

export const PostItem: FC<Props> = ({ post }) => {
  return (
    <li className="bg-card-foreground py-4 px-6 rounded-lg flex flex-col gap-y-4">
      {post.author?.image ? (
        <div className="flex gap-x-4 items-center">
          <Image
            className="h-8 w-8 rounded-full"
            src={post.author?.image ?? ""}
            alt={post.author?.name ?? ""}
            width={64}
            height={64}
            quality={75}
          />

          <p className="text-sm">{post.author?.name}</p>
        </div>
      ) : null}

      <Link href={"/posts/" + post.id}>
        <p className="text-xl font-bold hover:underline">{post.title}</p>
      </Link>

      <div className="mt-auto">
        <p className="text-xs">{post.createdAt.toLocaleString()}</p>
      </div>
    </li>
  );
};
