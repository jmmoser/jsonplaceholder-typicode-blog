export default function Comment({ comment }) {
  return (
    <div className="rounded border p-2">
      <div className="font-medium text-lg">{comment.name}</div>
      <div className="text-gray-700 mb-2 text-sm">{comment.email}</div>
      <div>{comment.body}</div>
    </div>
  );
}