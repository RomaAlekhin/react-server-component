import { Skeleton } from "@/components/ui/skeleton";
import { PostCommentLoading } from "./PostCommentLoading";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const PostCardLoading = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>
          <Skeleton className="h-9 w-1/2" />
        </CardTitle>

        <CardDescription>
          <Skeleton className="h-4 w-1/4" />
        </CardDescription>
      </CardHeader>

      <CardContent>
        <Skeleton className="h-20" />
      </CardContent>
    </Card>
  );
};
