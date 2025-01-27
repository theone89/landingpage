import { signIn } from "@/auth";

export default function SignIn() {
  return (
    <form
      className="relative"
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <button type="submit">Signin with Google</button>
    </form>
  );
}
