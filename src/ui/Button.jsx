export function Button({
  children,
  className = "",
  variant = "primary",
  type = "submit",
  props,
}) {
  const base = "px-4 py-2 rounded-sm font-medium trnsiton";

  const styles = {
    primary: "bg-blue-600 text-white, hover:bg-blue-700",
    secondary: "bg-gray-200 text-white, hover:bg-gray-300",
  };

  return (
    <button
      type={type}
      {...props}
      className={`${base} ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
