export default function Page({ children, ...props }) {
  return (
    <div className="p-4 sm:px-24" {...props}>
      {children}
    </div>
  );
}