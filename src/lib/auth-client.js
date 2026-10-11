// import { createAuthClient } from "better-auth/react";

// export const authClient = createAuthClient({
//     baseURL: process.env.BETTER_AUTH_URL // Base URL of your app
// });

// export const { signIn, signUp, updateUser, signOut, useSession } = createAuthClient();

import { createAuthClient } from "better-auth/react"; export const authClient = createAuthClient({ baseURL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL, }); export const { signIn, signUp, updateUser, signOut, useSession, } = authClient;