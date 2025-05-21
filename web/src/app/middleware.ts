export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/readings/:path*",
    "/runs/:path*",
    "/months/:path*",
    "/profile/:path*",
  ],
};