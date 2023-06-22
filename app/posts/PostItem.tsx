import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
    <Card>
      <CardHeader>
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
        <CardTitle>
          <Link href={"/posts/" + post.id}>
            <p className="text-xl font-bold hover:underline">{post.title}</p>
          </Link>
        </CardTitle>

        <CardDescription>{post.createdAt.toLocaleString()}</CardDescription>
      </CardHeader>
    </Card>
  );
};
