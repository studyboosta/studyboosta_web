import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>StudyBoosta</title>
      </head>
      <body className="bg-white">
        <ToastContainer position="top-right" autoClose={3000} />
        <AuthProvider>
          <Navbar activeRoute="/" />
          <main className="pt-20 sm:pt-24 md:pt-28 lg:pt-32">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}

