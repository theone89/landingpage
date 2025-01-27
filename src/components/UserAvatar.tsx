import { auth } from "@/auth";
import Image from "next/image";

export default async function UserAvatar() {
  const session = await auth();

  if (!session?.user) return null;

  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        src={session.user.image ?? "/default-avatar.png"}
        alt="User Avatar"
        width={50}
        height={50}
        className="rounded-full"
      />
      <p>{session.user.name}</p>
      <p>{session.user.email}</p>
    </div>
  );
}
