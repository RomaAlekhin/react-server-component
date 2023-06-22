"use client";

import { FormCard } from "@/components/base/FormCard";
import { InputField } from "@/components/form/Input";
import { TextAreaField } from "@/components/form/TextArea";
// import { InputField } from "@/components/form/Input";
// import { TextAreaField } from "@/components/form/TextArea";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Post, Prisma } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useCallback, useState, useTransition } from "react";

interface Props {
  post?: Post;
  onSave: (post: Prisma.PostCreateInput) => Promise<Post | undefined>;
}

export const PostEdit: React.FC<Props> = ({ post, onSave }) => {
  const { push, refresh } = useRouter();
  const [pending, startTransition] = useTransition();
  const title = post ? "Edit post" : "Add post";

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

    startTransition(async () => {
      await onSave(form);
      push("/posts");
      refresh();
    });
  }, [form]);

  return (
    <Card className="max-w-xl w-10/12">
      <CardHeader>
        <CardTitle>
          <h1 className="text-xl font-bold capitalize">{title}</h1>
        </CardTitle>
      </CardHeader>
      <form>
        <CardContent>
          <div className="grid grid-cols-1 gap-6">
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
        </CardContent>

        <CardFooter className="justify-end">
          <Button
            className="w-full"
            disabled={pending}
            onClick={(e) => {
              e.preventDefault();
              onSaveHandler();
            }}
          >
            Save
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};
