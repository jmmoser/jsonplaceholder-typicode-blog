export default function ErrorMessage({ error }) {
  if (!error) return null;
  
  return (
    <span className="text-red-500 text-sm font-bold">{error?.message || error}</span>
  );
}