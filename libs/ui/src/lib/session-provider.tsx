'use client';

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

export function SessionProvider({ children }: { children: ReactNode }) {
  return <div className="session-provider">{children}</div>;
}