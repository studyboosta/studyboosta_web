import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Add meta tags, title, or other <head> elements here */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>StudyBoosta</title>
      </head>
      <body className="bg-white"> {/* Optional body styles */}
        <Navbar activeRoute="/"/>
        <main className="min-h-screen">{children}</main> {/* Ensures pages take full height */}
        <Footer />
      </body>
    </html>
  );
}



