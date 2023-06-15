import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { Content, Header } from "@/components/layout";
import { authOptions } from "../api/auth/[...nextauth]";
import { UserProfileForm } from "@/components/UserProfileForm";

export default async function Profile() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/signin?callbackUrl=/profile");
  }

  return (
    <>
      <Header title="Profile" />
      <Content>
        <UserProfileForm />
      </Content>
    </>
  );
}
