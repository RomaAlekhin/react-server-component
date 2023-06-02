import { Content, Header } from "@/components/layout";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Suspense } from "react";

async function PostList() {
  const posts = await prisma.post.findMany();

  return (
    <ul className="space-y-10">
      {posts.map((post) => (
        <li key={post.id}>
          <h1 className="text-xl font-bold hover:text-indigo-500 hover:underline">
            <Link href={"/posts/" + post.id}>{post.title}</Link>
          </h1>
        </li>
      ))}
    </ul>
  );
}

export default async function Home() {
  return (
    <>
      <Header title="Posts" />
      <Content>
        <div>It's posts page</div>
        <Suspense fallback={<div>Loading posts..</div>}>
          {/* @ts-expect-error Async Server Component */}
          <PostList />
        </Suspense>
      </Content>
    </>
  );
}
