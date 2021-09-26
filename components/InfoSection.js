export default function Section({ title, children }) {
  return (
    <section>
      {title && (
        <h1 className="text-2xl font-bold mb-2">{title}</h1>
      )}
      <div className="grid gap-3">
        {children}
      </div>
    </section>
  );
}