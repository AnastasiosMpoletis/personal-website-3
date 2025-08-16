import { getAllInstruments } from '@/lib/supabase/db';

export default async function HomePage() {
  const instruments = await getAllInstruments();

  return (
    <main>
      <h1>Public Products</h1>
      <ul>
        {instruments?.map((p) => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
      <button>Insert dummy data</button>
    </main>
  );
}
