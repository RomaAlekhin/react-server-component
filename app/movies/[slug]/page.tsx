import { Content } from "@/components/layout";

interface Props {
  params: {
    slug: string;
  };
}
export default async function MovieDetail({ params }: Props) {
  const { slug } = params;
  return (
    <>
      <Content>
        <div>Movie detail</div>
      </Content>
    </>
  );
}
