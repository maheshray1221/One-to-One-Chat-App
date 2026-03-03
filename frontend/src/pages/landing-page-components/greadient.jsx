/* ─── Reusable gradient text ─── */
const COLORS = {
  cyan: "#00f5d4",
  violet: "#7b2fff",
  pink: "#ff2d78",
  yellow: "#f9e230",
};

export function GradText({ children, className = "" }) {
  return (
    <span
      className={`bg-clip-text text-transparent ${className}`}
      style={{
        backgroundImage: `linear-gradient(90deg, ${COLORS.cyan}, ${COLORS.violet}, ${COLORS.pink})`,
        backgroundSize: "200%",
        animation: "shimmer 4s linear infinite",
      }}
    >
      {children}
    </span>
  );
}
