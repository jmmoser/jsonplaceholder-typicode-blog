import useSWR from 'swr';
import { useRouter } from 'next/router';
import Comments from '../../components/Comments';
import Header from '../../components/Header';
import Post from '../../components/Post';
import ErrorMessage from '../../components/ErrorMessage';
import * as API from '../../lib/api';

export default function PostPage() {
  const router = useRouter();
  const { id } = router.query;

  const { data: post, error } = useSWR(id ? `/posts/${id}` : null, () => API.getPost(id));

  return (
    <div className="page">
      <Header />
      <ErrorMessage error={error} />
      {post && (
        <div className="flex justify-center">
          <main className="max-w-3xl">
            <Post post={post} />

            <h2 className="font-medium text-lg mb-2">Comments</h2>
            <Comments comments={post.comments} />
          </main>
        </div>
      )}
    </div>
  );
}