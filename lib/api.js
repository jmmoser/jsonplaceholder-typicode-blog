const API_ORIGIN = 'https://jsonplaceholder.typicode.com';

export function request(path, options) {
  return fetch(`${API_ORIGIN}${path}`, options).then(req => req.json());
}

export function getAuthor(id) {
  return request(`/users/${id}`);
}

export function getPost(id) {
  return request(`/posts/${id}?_embed=comments&_expand=user`);
}

export function listPosts({ q }) {
  const params = new URLSearchParams();
  if (q) {
    params.append('q', q);
  }
  return request(`/posts?${params.toString()}`);
}