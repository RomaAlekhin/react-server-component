import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function Home() {
  const posts = await prisma.post.findMany();

  return (
    <main className="flex flex-col items-center w-full h-full p-10 ">
      <div className="text-2xl font-bold">Blog Posts</div>
      <div className="my-10 border-2 w-full"></div>
      <ul className="space-y-10">
        {posts.map((post) => (
          <li key={post.id}>
            <h1 className="text-xl font-bold hover:text-indigo-500 hover:underline">
              <Link href={"/posts/" + post.id}>{post.title}</Link>
            </h1>
          </li>
        ))}
      </ul>
    </main>
  );
}
