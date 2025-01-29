// src/app/not-found.tsx
import { Suspense } from "react";
import NotFoundClient from "@/components/NotFoundClient";
import Loading from "@/components/Loading";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen relative">
      <Suspense fallback={<Loading />}>
        <NotFoundClient />
      </Suspense>
    </div>
  );
}
