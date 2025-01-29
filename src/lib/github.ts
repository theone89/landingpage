// utils/github.ts
export interface GithubMember {
  login: string;
  avatar_url: string;
}

export interface TeamMember {
  name: string;
  position: string;
  image: string;
}

export async function fetchGithubMembers(): Promise<TeamMember[]> {
  try {
    const response = await fetch("/api/github/members");
    //console.log("Respuesta de la API:", response); // Depuración
    if (!response.ok) {
      throw new Error("Error al recuperar los miembros de GitHub");
    }

    const githubMembers: GithubMember[] = await response.json();
    //console.log("Miembros de GitHub:", githubMembers); // Depuración

    return githubMembers.map((member) => ({
      name: member.login,
      position: "Developer",
      image: member.avatar_url,
    }));
  } catch (error) {
    console.error("Error fetching GitHub members:", error);
    return [];
  }
}
