import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6">
      <h1 className="text-5xl font-bold">
        AI Native Fullstack App
      </h1>

      <Link
        href="/dashboard"
        className="bg-black text-white px-6 py-3 rounded-lg"
      >
        Open Dashboard
      </Link>
    </main>
  );
}