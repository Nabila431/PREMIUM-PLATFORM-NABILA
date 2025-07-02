import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar';
import ReactPlayer from 'react-player';
import { useEffect, useState } from 'react';

const musicList = {
  'nrGPqEXrU02JhcpNIJLDaRWmzspYWBBJVFBYyxqOPYhQ': {
    title: 'The Queen Of Pretend',
    type: 'song',
    creator: 'Nabila Ahmad',
    src: 'https://www.youtube.com/watch?v=nrGPqEXrU02JhcpNIJLDaRWmzspYWBBJVFBYyxqOPYhQ'
  },
  '00rta8D86Qo38wDHr4dxZsRazLP00TIOaffDz00J3JLQfA': {
    title: 'Love poem ( Puisi Cinta )',
    type: 'song',
    creator: 'Nabila Ahmad',
    src: 'https://www.youtube.com/watch?v=00rta8D86Qo38wDHr4dxZsRazLP00TIOaffDz00J3JLQfA'
  },
  '1oAIOhbqkWrE31eLdVvZJMcnF02a7Uusdz22YlBcfhxg': {
    title: 'The Pleasure Of Love',
    type: 'lyric',
    creator: 'Nabila Ahmad',
    lyric: 'Lirik lengkap akan ditampilkan di sini.'
  },
  'AVQFBySki3O6RCgxTmvbd5KjOcV9pgKbGHJw2YP23kw': {
    title: 'Drunk Confessions',
    type: 'lyric',
    creator: 'Nabila Ahmad',
    lyric: 'Lirik lengkap akan ditampilkan di sini.'
  },
  'YDigUoNU01wIo2Z1OGPYGx3RZfyOs2dNFUacSIOHc6NU': {
    title: 'Broken Home Anthem',
    type: 'lyric',
    creator: 'Nabila Ahmad',
    lyric: 'Lirik lengkap akan ditampilkan di sini.'
  },
  'A5Qf02aZgpvj2Wcbeg5AUJj2zcr4gbMhVqcnIy6EAvew': {
    title: 'Secangkir Kopi Dan Sepotong Roti',
    type: 'song',
    creator: 'Nabila Ahmad',
    src: 'https://www.youtube.com/watch?v=A5Qf02aZgpvj2Wcbeg5AUJj2zcr4gbMhVqcnIy6EAvew'
  },
  'bj8sP402WcY202rDhb2iZxvVLr00PKUL700GE01XSsl02dNSI': {
    title: 'SETIAKU DISISIMU',
    type: 'song',
    creator: 'Nabila Ahmad',
    src: 'https://www.youtube.com/watch?v=bj8sP402WcY202rDhb2iZxvVLr00PKUL700GE01XSsl02dNSI'
  },
  'uasya8CBIMhSRhMjr02PowcFYAdtRUlGicZy01ejmIv2o': {
    title: 'wanita penjual sayur',
    type: 'song',
    creator: 'Nabila Ahmad',
    src: 'https://www.youtube.com/watch?v=uasya8CBIMhSRhMjr02PowcFYAdtRUlGicZy01ejmIv2o'
  },
  'YS3dhhygPnMl6F00ea02OztJ8WZIi7pT9KfzJIrPqzoHE': {
    title: 'Janda Nakal Pencuri Suami',
    type: 'song',
    creator: 'Nabila Ahmad',
    src: 'https://www.youtube.com/watch?v=YS3dhhygPnMl6F00ea02OztJ8WZIi7pT9KfzJIrPqzoHE'
  }
};

export default function MusicPage() {
  const router = useRouter();
  const { id } = router.query;
  const music = musicList[id];

  if (!music) {
    return (
      <div>
        <Navbar />
        <main className="max-w-xl mx-auto p-8">
          <h2 className="text-center text-xl text-red-500">Lagu/Lirik tidak ditemukan.</h2>
        </main>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <main className="max-w-xl mx-auto p-8">
        <h2 className="text-2xl font-bold mb-2">{music.title}</h2>
        <div className="mb-4 text-gray-400">{music.creator}</div>
        {music.type === 'song' && (
          <div className="aspect-video bg-black rounded-md overflow-hidden mb-4">
            <ReactPlayer url={music.src} width="100%" height="100%" controls />
          </div>
        )}
        {music.type === 'lyric' && (
          <div className="bg-gray-800 p-4 rounded text-lg">
            {music.lyric}
          </div>
        )}
        <button
          onClick={() => router.back()}
          className="mt-6 px-4 py-2 bg-pink-500 rounded hover:bg-pink-600"
        >
          Kembali
        </button>
      </main>
    </div>
  );
}