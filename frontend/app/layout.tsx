import { Inter } from "next/font/google";
import "./globals.css";
import Link from 'next/link';

const inter = Inter({ subsets: ["latin"] });

const Header = () => {
  return (
    

    <header className="bg-gradient-to-r from-blue-200 to-blue-400 text-blue-900 py-4 px-6 border-b-2 border-blue-200">
      <div className="container mx-auto flex justify-start items-center">
        <Link href="/">
          <h1 className="text-2xl font-bold transform hover:scale-105 transition-transform cursor-pointer">Nawy Real Estate</h1>
        </Link>
      </div>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-gray-700 py-4 px-6 mt-8">
      <div className="container mx-auto flex justify-center items-center">
        <p>&copy; {new Date().getFullYear()} NAWY Real Estate. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
