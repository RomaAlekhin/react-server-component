"use client";

import { Button } from "@/components/base/Button";
import { FormCard } from "@/components/base/FormCard";
import { InputField } from "@/components/form/Input";
import { TextAreaField } from "@/components/form/TextArea";
import { Post, Prisma } from "@prisma/client";
import { useCallback, useState } from "react";

interface Props {
  post?: Post;
  onSave: (post: Prisma.PostCreateInput) => {};
}

export const PostEdit: React.FC<Props> = ({ post, onSave }) => {
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

  const onSaveHandler = useCallback(() => {
    if (!form) return;
    onSave(form);
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
