import { useState } from 'react';
import useSWR from 'swr';
import { useDebounce } from 'react-use';
import Posts from '../components/Posts';
import Page from '../components/Page';
import ErrorMessage from '../components/ErrorMessage';
import * as API from '../lib/api';

export default function Home() {
  const [search, setSearch] = useState('');
  const [q, setQ] = useState('');
  useDebounce(() => {
    setQ(search);
  }, 400, [search]);

  const { data: posts, error } = useSWR(`/posts?q=${q}`, () => API.listPosts({ q }));

  return (
    <Page>
      <div className="flex justify-center">
        <main className="flex-1 max-w-3xl">
          <h1 className="text-6xl font-bold mt-4 mb-8 text-center">
            Blog Posts
          </h1>
          
          <div>
            <input
              className="border rounded shadow p-1 mb-8"
              type="text"
              placeholder="Search"
              onChange={ev => setSearch(ev.target.value)}
            />
          </div>

          <ErrorMessage error={error} />

          <Posts posts={posts} />
        </main>
      </div>
    </Page>
  );
}
