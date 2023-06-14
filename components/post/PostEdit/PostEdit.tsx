"use client";

import { FormCard } from "@/components/base/FormCard";
import { InputField } from "@/components/form/Input";
import { TextAreaField } from "@/components/form/TextArea";
import { Button } from "@/components/ui/button";
import { Post, Prisma } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

interface Props {
  post?: Post;
  onSave: (post: Prisma.PostCreateInput) => Promise<Post | undefined>;
}

export const PostEdit: React.FC<Props> = ({ post, onSave }) => {
  const { push, refresh } = useRouter();

  const [form, setForm] = useState<Prisma.PostCreateInput>({
    title: post?.title ?? "",
    content: post?.content ?? "",
  });

  const onChangeHandler = useCallback(
    (key: keyof Post) => (value: Post[keyof Post]) => {
      setForm((prev) => ({ ...prev, [key]: value }));
    },
    []
  );

  const onSaveHandler = useCallback(async () => {
    if (!form) return;
    const newPost = await onSave(form);
    if (newPost) {
      push(`/posts/${newPost.id}`);
    }
    refresh();
  }, [form]);

  return (
    <FormCard title="Post">
      <form>
        <div className="grid grid-cols-1 gap-6 mt-4">
          <InputField
            className="col-span-2"
            label="Title"
            name="title"
            type="text"
            value={form?.title ?? ""}
            onChange={(e) => onChangeHandler("title")(e.target.value)}
          />

          <TextAreaField
            className="col-span-2"
            label="Content"
            name="content"
            rows={6}
            value={form?.content ?? ""}
            onChange={(e) => onChangeHandler("content")(e.target.value)}
          />
        </div>

        <div className="flex justify-end mt-6">
          <Button
            onClick={(e) => {
              e.preventDefault();
              onSaveHandler();
            }}
          >
            Save
          </Button>
        </div>
      </form>
    </FormCard>
  );
};
