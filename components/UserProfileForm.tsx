"use client";

import { useTransition } from "react";
import { useSession } from "next-auth/react";
import { updateName } from "@/lib/actions/users";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";

export const UserProfileForm = () => {
  const { data: session, update } = useSession();
  const { toast } = useToast();

  const [loading, startTransition] = useTransition();

  const handleSubmit = async (formData: FormData) => {
    const { name, email } = Object.fromEntries(formData.entries());

    if (
      !name ||
      !email ||
      typeof name !== "string" ||
      typeof email !== "string"
    )
      return;

    // Server action
    await updateName(email, name);

    // Update next-auth session
    await update({ name });

    toast({ title: "Your name has been updated successfully." });
  };

  return (
    <div className="m-auto w-full sm:max-w-lg rounded-lg p-8 shadow-lg bg-card-foreground">
      <h2 className="mb-6 text-xl">Update your info</h2>

      <form
        action={(data) => {
          startTransition(async () => await handleSubmit(data));
        }}
        className="flex gap-x-4"
      >
        <Input
          placeholder="Name"
          name="name"
          defaultValue={session?.user?.name ?? ""}
        />
        <Input type="hidden" name="email" value={session?.user?.email ?? ""} />
        <Button disabled={loading}>Update</Button>
      </form>
    </div>
  );
};
