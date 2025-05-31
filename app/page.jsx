'use client';

import { useEffect, useState } from 'react';
import DateForm from '../components/DateForm';
import AsteroidList from '../components/AsteroidList';
import { fetchAsteroids } from '../lib/nasa';
import Loading from '@/components/Loading';

export default function HomePage() {
  const [asteroids, setAsteroids] = useState({});
  const [loading, setLoading] = useState(false);

  async function handleSearch(start, end) {
    setLoading(true);
    try {
      const data = await fetchAsteroids(start, end);
      setAsteroids(data);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    handleSearch(null, null)
  }, [])

  return (
    <main className="p-8">
      <h1 className="text-2xl sm:text-3xl font-bold">🌍 Near-Earth Asteroid Tracking</h1>
      <DateForm onSubmit={handleSearch} />
      {loading && <Loading />}
      <AsteroidList data={asteroids} />
    </main>
  );
}