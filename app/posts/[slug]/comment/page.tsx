import { Content } from "@/components/layout";
import { PostCard, PostEdit } from "@/components/post";

interface Props {
  params: { slug: string };
}

export default async function Post({ params }: Props) {
  return (
    <div className="flex flex-col items-center w-full h-full mt-10">
      <div className="text-2xl font-bold mb-10">Add comment</div>
      {/* <PostEdit onSave={onSaveHandler} /> */}
    </div>
  );
  //   return (
  //     <Content>
  //       <div>Comment</div>
  //     </Content>
  //   );
}
