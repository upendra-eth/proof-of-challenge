// src/components/NavBar.js
'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

export default function NavBar() {
  const { data: session } = useSession();

  return (
    <nav className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Proof-of-Challenge
        </Link>
        <div className="space-x-4">
          <Link href="/upload" className="px-4 py-2 bg-green-500 rounded hover:bg-green-700">
            Upload Proof-of-Work
          </Link>
          {session ? (
            <>
              <span className="px-4 py-2">{session.user.name}</span>
              <button
                className="px-4 py-2 bg-red-500 rounded hover:bg-red-700"
                onClick={() => signOut()}
              >
                Logout
              </button>
            </>
          ) : (
            <button
              className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-700"
              onClick={() => signIn()}
            >
              Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
