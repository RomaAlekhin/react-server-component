// import { Button } from "@/components/base/Button";
import { Content, Header } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { getPosts } from "@/lib/actions";
import Link from "next/link";

export default async function Posts() {
  const posts = await getPosts();

  return (
    <>
      <Header
        title="Posts"
        action={
          <Button asChild>
            <Link href="/posts/add">Add post</Link>
          </Button>
        }
      />
      <Content>
        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post.id}>
              <Link
                href={"/posts/" + post.id}
                className="bg-card-foreground flex py-2 px-3 justify-between items-end rounded"
              >
                <p className="text-xl font-bold hover:underline">
                  {post.title}
                </p>
                <p className="text-xs">{post.createdAt.toLocaleString()}</p>
              </Link>
            </li>
          ))}
        </ul>
      </Content>
    </>
  );
}
