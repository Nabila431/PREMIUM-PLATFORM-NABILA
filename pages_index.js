import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import Navbar from '../components/Navbar';
import Link from 'next/link';

const mockSongs = [
  {
    id: 'nrGPqEXrU02JhcpNIJLDaRWmzspYWBBJVFBYyxqOPYhQ',
    title: 'The Queen Of Pretend',
    creator: 'Nabila Ahmad',
    type: 'song',
  },
  {
    id: '00rta8D86Qo38wDHr4dxZsRazLP00TIOaffDz00J3JLQfA',
    title: 'Love poem ( Puisi Cinta )',
    creator: 'Nabila Ahmad',
    type: 'song',
  },
  {
    id: '1oAIOhbqkWrE31eLdVvZJMcnF02a7Uusdz22YlBcfhxg',
    title: 'The Pleasure Of Love',
    creator: 'Nabila Ahmad',
    type: 'lyric',
  },
  {
    id: 'AVQFBySki3O6RCgxTmvbd5KjOcV9pgKbGHJw2YP23kw',
    title: 'Drunk Confessions',
    creator: 'Nabila Ahmad',
    type: 'lyric',
  },
  {
    id: 'YDigUoNU01wIo2Z1OGPYGx3RZfyOs2dNFUacSIOHc6NU',
    title: 'Broken Home Anthem',
    creator: 'Nabila Ahmad',
    type: 'lyric',
  },
  {
    id: 'A5Qf02aZgpvj2Wcbeg5AUJj2zcr4gbMhVqcnIy6EAvew',
    title: 'Secangkir Kopi Dan Sepotong Roti',
    creator: 'Nabila Ahmad',
    type: 'song',
  },
  {
    id: 'bj8sP402WcY202rDhb2iZxvVLr00PKUL700GE01XSsl02dNSI',
    title: 'SETIAKU DISISIMU',
    creator: 'Nabila Ahmad',
    type: 'song',
  },
  {
    id: 'uasya8CBIMhSRhMjr02PowcFYAdtRUlGicZy01ejmIv2o',
    title: 'wanita penjual sayur',
    creator: 'Nabila Ahmad',
    type: 'song',
  },
  {
    id: 'YS3dhhygPnMl6F00ea02OztJ8WZIi7pT9KfzJIrPqzoHE',
    title: 'Janda Nakal Pencuri Suami',
    creator: 'Nabila Ahmad',
    type: 'song',
  }
];

export default function Home() {
  const [songs, setSongs] = useState(mockSongs);
  const [search, setSearch] = useState('');

  const filteredSongs = songs.filter(song => 
    song.title.toLowerCase().includes(search.toLowerCase()) ||
    song.creator.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Navbar />
      <main className="max-w-3xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4 text-center">🎵 Selamat datang di Nabila Ahmad Musik Platform 🎶</h1>
        <input
          className="w-full p-2 mb-4 text-black rounded"
          placeholder="Cari lagu, lirik, atau puisi..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <div className="grid gap-4">
          {filteredSongs.map(song => (
            <Link href={`/music/${song.id}`} key={song.id} className="block p-4 bg-gray-800 rounded hover:bg-pink-900 transition">
              <div className="font-semibold">{song.title}</div>
              <div className="text-sm text-gray-300">{song.creator}</div>
              <div className="text-xs">{song.type === 'lyric' ? 'Lirik/Poem' : 'Lagu'}</div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}