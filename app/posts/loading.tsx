import { Content, Header } from "@/components/layout";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <>
      <Header title="Posts" />
      <Content>
        <ul className="space-y-4">
          {Array(5)
            .fill(null)
            .map((_, i) => i++)
            .map((id) => (
              <Skeleton key={id} className="bg-card-foreground h-10" />
            ))}
        </ul>
      </Content>
    </>
  );
}
