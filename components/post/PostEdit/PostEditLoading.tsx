import { FormCard } from "@/components/base/FormCard";
import { Skeleton } from "@/components/ui/skeleton";

export const PostEditLoading = () => {
  return (
    <FormCard title="Post">
      <div className="grid grid-cols-1 gap-6 mt-4">
        <Skeleton className="h-8 w-full" />
        <Skeleton className="h-40 w-full" />
      </div>
    </FormCard>
  );
};
