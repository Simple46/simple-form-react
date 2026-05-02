export function Input({ className = "", error = false, ...props }) {
  return (
    <input
      {...props}
      className={`px-3 py-4 rounded-sm border transition outline-none ${error ? "border-red-500" : "border-gray-300"} focus:border-blue-500 focus:ring-2 focus:ring-blue-200 ${className}`}
    />
  );
}
