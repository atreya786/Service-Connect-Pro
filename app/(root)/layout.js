import { Roboto } from "next/font/google";
import "../globals.css";
import { Toaster } from "react-hot-toast";
import Navbar from "@constants/Navbar";
import Footer from "@constants/Footer";
import { MyProvider } from "@context/MyContext";
import Provider from "@components/SessionProvider";

const roboto = Roboto({ subsets: ["latin"], weight: ["300"] });

export const metadata = {
  title: "Service Connect Pro",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossOrigin=""
        />
      </head>
      <body className={roboto.className}>
        <Toaster position="top-right" />
        <Provider>
          <MyProvider>
            <Navbar />
            {children}
            <Footer />
          </MyProvider>
        </Provider>
      </body>
    </html>
  );
}
