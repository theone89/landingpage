"use client";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

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
            Bienvenido de nuevo, {session?.user?.name || "User"}!
          </h1>
          <p className="text-gray-600 text-center mb-6">
            Ya has iniciado session.
          </p>
          <Link
            href={"/"}
            className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition duration-200 flex items-center justify-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            Ir al Inicio
          </Link>
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
          Bienvenid@
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Inicia session para continuar
        </p>
        <button
          onClick={() => signIn("google")}
          className="w-full py-2 px-4 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold rounded-lg transition duration-200 flex items-center justify-center gap-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
          >
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          <span>Continuar con Google</span>
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
