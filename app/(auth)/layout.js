import { Toaster } from "react-hot-toast";
import "../globals.css";

export const metadata = {
  title: "Service Connect Pro",
  description: "Build a Next 14 Service Provider App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="w-full
    h-screen
    bg-gradient-to-r
    from-pink-500
    via-green-500
    to-yellow-500
    background-animate"
      >
        <Toaster position="top-right" />
        {children}
      </body>
    </html>
  );
}
