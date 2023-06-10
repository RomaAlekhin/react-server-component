import { GoogleSignInButton } from "@/components/base/Button";
import { Card } from "@/components/base/Card";
import { Content } from "@/components/layout";

export default function SignInPage() {
  return (
    <Content>
      <Card title="Sign in" className="max-w-lg mx-auto">
        <GoogleSignInButton />
      </Card>
    </Content>
  );
}
