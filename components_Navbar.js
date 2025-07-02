import Link from 'next/link';
import { useSupabaseUser } from '../hooks/useSupabaseUser';

export default function Navbar() {
  const { user, signOut } = useSupabaseUser();

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gray-800 shadow">
      <Link href="/" className="text-2xl font-bold text-pink-400">
        Nabila Ahmad Musik
      </Link>
      <div className="flex gap-4">
        {user ? (
          <>
            <span className="text-sm">Hi, {user.email}</span>
            <button 
              onClick={signOut}
              className="bg-pink-500 px-3 py-1 rounded hover:bg-pink-400 transition"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link href="/login" className="hover:underline">Login</Link>
            <Link href="/register" className="hover:underline">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}