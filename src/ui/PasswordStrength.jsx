export function PasswordStrength({ score = 0 }) {
  const getColor = (level) => {
    if (score >= level) {
      if (score <= 2) return "bg-red-500";
      if (score <= 4) return "bg-yellow-500";
      return "bg-green-500";
    }
    return "bg-gray-200";
  };

  return (
    <div className="flex gap-1 mt-2">
      {[1, 2, 3, 4, 5].map((level) => (
        <div key={level} className={`h-2 flex-1 rounded ${getColor(level)}`} />
      ))}
    </div>
  );
}
