"use client";

import { useSession } from "next-auth/react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";

export const UserProfileForm = () => {
  const { data: session, update } = useSession();
  const { toast } = useToast();

  const handleSubmit = async (formData: FormData) => {
    const { name, email } = Object.fromEntries(formData.entries());

    if (!name || !email) return;

    // Server action
    // await updateName(name, email);

    // Update next-auth session
    // await update({ name });

    toast({ title: "Your name has been updated successfully." });
  };
  return (
    <div className="m-auto w-full sm:max-w-lg rounded-lg p-8 shadow-lg bg-card-foreground">
      <h2 className="mb-6 text-xl">Update your info</h2>

      <form action={handleSubmit} className="flex gap-x-4">
        <Input
          placeholder="Name"
          name="name"
          defaultValue={session?.user?.name ?? ""}
        />
        <Input type="hidden" name="email" value={session?.user?.email ?? ""} />
        <Button>Update</Button>
      </form>
    </div>
  );
};
