"use client";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";

const LoginPage = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (session) {
    return (
      <div className="relative min-h-screen">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-2xl shadow-lg max-w-sm w-full">
          <Image
            src="/SFC-logo.svg"
            alt="Login Image"
            className="w-full h-24 object-center rounded-t-2xl mb-0"
            width={50}
            height={200}
            quality={100}
          />
          <p className="text-center">StrongFreeCode</p>
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
            Welcome Back, {session?.user?.name || "User"}!
          </h1>
          <p className="text-gray-600 text-center mb-6">
            You are already signed in.
          </p>
          <button
            onClick={() => signIn("google")}
            className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition duration-200"
          >
            Sign in with Google
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-2xl shadow-lg max-w-sm w-full">
        <Image
          src="/SFC-logo.svg"
          alt="Login Image"
          className="w-full h-24 object-center rounded-t-2xl mb-0"
          width={50}
          height={200}
          quality={100}
        />
        <p className="text-center">StrongFreeCode</p>
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Welcome Back
        </h1>
        <p className="text-gray-600 text-center mb-6">Sign in to continue</p>
        <button
          onClick={() => signIn("google")}
          className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition duration-200"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
