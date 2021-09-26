import Link from 'next/link';

export default function PageNotFound() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl mb-4">404 - Page Not Found</h1>
      <Link href="/">
        <a className="link font-bold text-gray-700 text-2xl">Home</a>
      </Link>
    </div>
  );
}