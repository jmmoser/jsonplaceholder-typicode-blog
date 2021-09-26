import PostPreview from './PostPreview';

export default function Posts({ posts }) {
  if (!posts) {
    return null;
  }

  return (
    <>
      {posts.length === 0 && (
        <div className="font-bold text-gray-400">No Posts</div>
      )}
      {posts.length > 0 && (
        <div className="grid gap-4">
          {posts.map((post) => (
            <PostPreview
              key={post.id}
              post={post}
            />
          ))}
        </div>
      )}
    </>
  );
}