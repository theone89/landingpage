import { signIn } from "@/auth";
import UserAvatar from "@/components/UserAvatar";

export default function LoginPage() {
  return (
    <div className="h-screen flex items-center justify-center">
      <form
        className="relative flex flex-col items-center justify-center"
        action={async () => {
          "use server";
          await signIn();
        }}
      >
        <UserAvatar />

        <button type="submit">Signin with Google</button>
      </form>
    </div>
  );
}
