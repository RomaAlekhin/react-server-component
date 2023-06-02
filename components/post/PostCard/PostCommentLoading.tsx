import { Skeleton } from "@/components/ui/skeleton";

export const PostCommentLoading = () => {
  return (
    <div className="flex flex-col gap-y-2">
      <Skeleton className="h-8" />
      <Skeleton className="h-2 w-1/4" />
    </div>
  );
};
