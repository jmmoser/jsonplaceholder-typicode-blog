import Link from 'next/link';

export default function Post({ post }) {
  return (
    <div>
      <h1 className="font-bold text-3xl mb-2">{post.title}</h1>

      <div className="flex justify-center items-center">
        <span className="mr-2">By </span>
        <Link href={`/authors/${post.user.id}`}>
          <a className="font-bold text-gray-700 link rounded-md p-2 hover:bg-gray-100">{post.user.name}</a>
        </Link>
      </div>

      <div className="my-12">{post.body}</div>
    </div>
  );
}