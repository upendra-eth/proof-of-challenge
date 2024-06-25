// Copyright 2024 user
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     https://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// src/app/login/page.js
'use client';
import { signIn, signOut, useSession } from 'next-auth/react';

export default function LoginPage() {
  const { data: session } = useSession();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-sm">
        {!session && (
          <>
            <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
            <button
              onClick={() => signIn('facebook')}
              className="w-full px-4 py-2 mb-2 bg-blue-600 rounded hover:bg-blue-700"
            >
              Login with Facebook
            </button>
            <button
              onClick={() => signIn('twitter')}
              className="w-full px-4 py-2 bg-blue-400 rounded hover:bg-blue-500"
            >
              Login with Twitter
            </button>
          </>
        )}
        {session && (
          <>
            <h1 className="text-2xl font-bold mb-4 text-center">Welcome, {session.user.name}</h1>
            <button
              onClick={() => signOut()}
              className="w-full px-4 py-2 bg-red-600 rounded hover:bg-red-700"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
}
