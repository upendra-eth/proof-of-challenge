

import { Inter } from "next/font/google";
import "./globals.css";

import SessionProvider from '../components/SessionProvider';
import NavBar from '../components/NavBar';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className= "bg-gray-900 text-white min-h-screen flex flex-col">
      <SessionProvider>
          <NavBar />
          <main className="flex-1 w-full max-w-4xl mx-auto p-4 flex flex-col items-center justify-center">
            {children}
          </main>
          <footer className="bg-gray-800 w-full py-4 text-center">
            <p>&copy; 2024 Secure Proof-of-Work Storage</p>
          </footer>
        </SessionProvider>
      </body>
    </html>
  );
}
