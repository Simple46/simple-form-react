export function ErrorText({ children, className = "" }) {
  return <p className={`text-red-500 mt-1 ${className}`}>{children}</p>;
}
