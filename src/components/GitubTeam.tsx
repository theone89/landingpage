/* eslint-disable @typescript-eslint/no-explicit-any */
// app/components/Team.tsx
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Member = {
  login: string;
  avatar_url: string;
  html_url: string;
};

export default function GithubTeam() {
  const [members, setMembers] = useState<Member[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await fetch("/api/github/members");
        if (!response.ok) {
          throw new Error("Error al cargar los miembros");
        }
        const data: Member[] = await response.json();
        setMembers(data);
      } catch (err: any) {
        setError(err.message);
      }
    };

    fetchMembers();
  }, []);

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 absolute h-screen">
      <h1>
        Miembros Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Dolorem consequatur nam rem quo, fugit quod laboriosam nisi. Eum quas
        repudiandae, possimus voluptate consectetur eius facilis non pariatur?
        Aut, assumenda ea.
      </h1>
      {members.map((member) => (
        <div
          key={member.login}
          className="p-4 bg-white shadow rounded-lg flex flex-col items-center absolute"
        >
          <Image
            src={member.avatar_url}
            alt={member.login}
            width={64}
            height={64}
            className="w-16 h-16 rounded-full mb-2"
          />
          <a
            href={member.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 font-bold"
          >
            {member.login}
          </a>
        </div>
      ))}
    </div>
  );
}
