
// src/app/page.js
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <h2 className="text-2xl font-bold mb-4">Welcome to Proof-of-Work Storage</h2>
      <div className="space-x-4">
        <Link href="/login" className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-700">
          Login
        </Link>
        <Link href="/upload" className="px-4 py-2 bg-green-500 rounded hover:bg-green-700">
          Upload Proof-of-Work
        </Link>
      </div>
    </div>
  );
}
