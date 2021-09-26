import Link from 'next/link';

export default function Header() {
  return (
    <header className="mb-4">
      <Link href="/">
        <a className="link font-bold text-gray-700">Home</a>
      </Link>
    </header>
  );
}