import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { Content, Header } from "@/components/layout";
import { authOptions } from "../api/auth/[...nextauth]";

export default async function Settings() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/signin?callbackUrl=/settings");
  }

  return (
    <>
      <Header title="Settings" />
      <Content>
        <div>It's a settings page</div>
      </Content>
    </>
  );
}
