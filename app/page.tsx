import { Content, Header } from "@/components/layout";
import Link from "next/link";

// async function fetchBlogPosts() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");

//   if (!res.ok) {
//     throw new Error("Error occurred when fetching posts");
//   }
//   return res.json();
// }

export default async function Home() {
  // const posts = await fetchBlogPosts();

  return (
    <>
      <Header title="Home" />
      <Content>
        <div>It's home page</div>
      </Content>
    </>
  );
}
