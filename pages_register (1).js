import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) {
      setError(error.message);
    } else {
      router.push('/');
    }
  };

  return (
    <div>
      <Navbar />
      <main className="max-w-sm mx-auto mt-12 p-4 bg-gray-800 rounded">
        <h2 className="text-xl mb-4 text-center font-bold">Register</h2>
        <form onSubmit={handleRegister} className="flex flex-col gap-3">
          <input
            required
            type="email"
            className="p-2 rounded text-black"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            required
            type="password"
            className="p-2 rounded text-black"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          {error && <div className="text-red-400">{error}</div>}
          <button className="bg-pink-500 py-2 rounded font-bold hover:bg-pink-600">Register</button>
        </form>
      </main>
    </div>
  );
}