import { Content, Header } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { getPosts } from "@/lib/prisma/posts";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { authOptions } from "../api/auth/[...nextauth]";
import Image from "next/image";
import { PostItem } from "./PostItem";

export default async function Posts() {
  const posts = await getPosts();
  const session = await getServerSession(authOptions);

  return (
    <>
      <Header
        title="Posts"
        action={
          session ? (
            <Button asChild>
              <Link href="/posts/add">Add post</Link>
            </Button>
          ) : null
        }
      />
      <Content>
        <ul className="grid grid-cols-fluid gap-6">
          {posts.map((post) => (
            <PostItem key={post.id} post={post} />
          ))}
        </ul>
      </Content>
    </>
  );
}
