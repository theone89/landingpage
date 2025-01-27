import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { createClient } from "@supabase/supabase-js";

// Configura el cliente de Supabase
const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

export const { handlers, signIn, signOut, auth } = NextAuth({
  debug: false,
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      console.log("User:", user);
      console.log("Account:", account);
      console.log("Profile:", profile);

      try {
        // Verificar si el usuario ya existe en Supabase
        const { data: existingUser, error: findError } = await supabase
          .from("users")
          .select("*")
          .eq("email", user.email!)
          .single();

        if (findError && findError.code !== "PGRST116") {
          // PGRST116 significa "No se encontraron filas"
          console.error("Error al buscar usuario:", findError);
          return false;
        }

        if (!existingUser) {
          // Si el usuario no existe, lo registramos en Supabase
          const { error: insertError } = await supabase.from("users").insert({
            name: user.name,
            email: user.email,
            image: user.image,
            provider: account?.provider, // "google"
            provider_id: account?.providerAccountId, // ID único de Google
          });

          if (insertError) {
            console.error("Error al registrar usuario:", insertError);
            return false;
          }
        }

        // Permitir el inicio de sesión
        return true;
      } catch (error) {
        console.error("Error en el callback signIn:", error);
        return false;
      }
    },
  },
});
