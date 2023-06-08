import { PostCardLoading } from "@/components/post/PostCard/PostCardLoading";

export default function Loading() {
  return (
    <div className="flex flex-col items-center w-full h-full mt-10">
      <div className="text-2xl font-bold mb-10">Add post</div>
      <PostCardLoading />
    </div>
  );
}
