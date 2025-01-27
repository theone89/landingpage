// Tipo para la tabla `users`
export interface User {
  id: string; // UUID
  name?: string | null;
  email?: string | null;
  emailVerified?: Date | null;
  image?: string | null;
}

// Tipo para la tabla `sessions`
export interface Session {
  id: string; // UUID
  expires: Date;
  sessionToken: string;
  userId: string; // UUID (referencia a `users.id`)
}

// Tipo para la tabla `accounts`
export interface Account {
  id: string; // UUID
  type: string;
  provider: string;
  providerAccountId: string;
  refresh_token?: string | null;
  access_token?: string | null;
  expires_at?: number | null;
  token_type?: string | null;
  scope?: string | null;
  id_token?: string | null;
  session_state?: string | null;
  oauth_token_secret?: string | null;
  oauth_token?: string | null;
  userId: string; // UUID (referencia a `users.id`)
}

// Tipo para la tabla `verification_tokens`
export interface VerificationToken {
  identifier: string;
  token: string;
  expires: Date;
}

// Tipo para la función `next_auth.uid()`
export type UidFunction = () => string; // UUID
