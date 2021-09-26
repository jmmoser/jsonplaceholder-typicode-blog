import Link from 'next/link';

export default function PostPreview({ post }) {
  return (
    <div className="overflow-hidden rounded shadow border p-4 hover:text-blue-600 focus:text-blue-600 hover:bg-gray-100">
      <Link href={`/posts/${post.id}`}>
        <a>
          <div className="font-bold mb-2">{post.title}</div>
          <div className="overflow-ellipsis overflow-hidden whitespace-nowrap">
            {post.body}
          </div>
        </a>
      </Link>
    </div>
  );
}