import { Toaster } from "react-hot-toast";
import "../globals.css";

export const metadata = {
  title: "Service Connect Pro",
  description: "Build a Next 14 Service Provider App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-rose-300">
        <Toaster position="top-right" />
        {children}
      </body>
    </html>
  );
}
