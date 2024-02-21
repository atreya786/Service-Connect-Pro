import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/",
  },
});

export const config = {
  matcher: [
    "/About/:path*",
    "/Home/:path*",
    "/Admin/:path*",
    "/Contact/:path*",
    "/Profile/:path*",
    "/Orders/:path*",
    "/Payment/:path*",
    "/Services/:path* ",
  ],
};
