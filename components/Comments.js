import Comment from './Comment';

export default function Comments({ comments }) {
  if (!comments) {
    return null;
  }

  return (
    <>
      {comments.length === 0 && (
        <div className="font-bold text-gray-400">No Comments</div>
      )}
      {comments.length > 0 && (
        <div className="grid gap-4">
          {comments.map((comment) => (
            <Comment
              key={comment.id}
              comment={comment}
            />
          ))}
        </div>
      )}
    </>
  );
}