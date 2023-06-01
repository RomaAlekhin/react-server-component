import Link from "next/link";

async function fetchBlogPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok) {
    throw new Error("Error occurred when fetching posts");
  }
  return res.json();
}

export default async function Home() {
  const posts = await fetchBlogPosts();

  return (
    <main className="flex flex-col items-center w-full h-full p-10 ">
      <div className="text-2xl font-bold">Blog Posts</div>
      <div className="my-10 border-2 w-full"></div>
      <ul className="space-y-10">
        <Link href={"/posts"}>Blog Posts</Link>
      </ul>
    </main>
  );
}
