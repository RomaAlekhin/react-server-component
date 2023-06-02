import { PostEditLoading } from "@/components/post/PostEdit/PostEditLoading";

export default function Loading() {
  return (
    <div className="flex flex-col items-center w-full h-full p-10">
      <div className="text-2xl font-bold mb-10">Edit post</div>
      <PostEditLoading />
    </div>
  );
}
