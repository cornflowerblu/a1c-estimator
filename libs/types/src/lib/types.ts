export type RandomData = {
    id: number,
    name: string,
    age: number,
    address: string,
    tags: string[]
}

export type User = {
    id: string;
    email: string;
    name?: string;
    emailVerified?: boolean;
    image?: string;
}

export type AuthProvider = 'cognito' | 'google' | 'apple' | 'facebook' | 'magic-link' | 'passkey';

export type MagicLinkPayload = {
    email: string;
    token: string;
    expiresAt: number;
}

export type PasskeyCredential = {
    id: string;
    userId: string;
    publicKey: string;
    createdAt: Date;
}

export type AuthError = {
    code: string;
    message: string;
}

export type AuthResponse = {
    success: boolean;
    user?: User;
    error?: AuthError;
    redirectUrl?: string;
}