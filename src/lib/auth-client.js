import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
    baseURL: process.env.BETTER_AUTH_URL // Base URL of your app
});

export const { signIn, signUp, updateUser, signOut, useSession } = createAuthClient();