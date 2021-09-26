export default function Field({ label, children }) {
  return (
    <div>
      <div>{children}</div>
      <div>
        <span className="text-sm font-medium text-gray-500">{label}</span>
      </div>
    </div>
  );
}