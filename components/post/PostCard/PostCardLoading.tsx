import { Skeleton } from "@/components/ui/skeleton";
import { PostCommentLoading } from "./PostCommentLoading";

export const PostCardLoading = () => {
  return (
    <div className="relative bg-card-foreground text-card md:w-1/2 w-full rounded-xl shadow-md p-8 flex flex-col gap-y-2">
      <Skeleton className="h-6 w-1/2" />
      <Skeleton className="h-4 w-1/2" />
      <Skeleton className="h-2 w-1/4" />

      <div className="p-2 flex flex-col gap-y-4">
        <Skeleton className="h-6 w-1/2" />
        {Array.from({ length: 3 })
          .map((_, i) => i++)
          .map((id) => (
            <PostCommentLoading key={id} />
          ))}
      </div>
    </div>
  );
};
