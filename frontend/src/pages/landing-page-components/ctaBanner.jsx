import { useNavigate } from "react-router-dom";

export default function CTABanner({ COLORS }) {
  const router = useNavigate();
  return (
    <div
      className="mx-6 lg:mx-16 mb-24 rounded-3xl p-14 md:p-20 text-center relative overflow-hidden border"
      style={{
        background: `linear-gradient(135deg, rgba(123,47,255,0.2), rgba(0,245,212,0.08))`,
        borderColor: `rgba(0,245,212,0.2)`,
      }}
    >
      <div
        className="absolute top-[-100px] right-[-100px] w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, rgba(0,245,212,0.15), transparent 70%)`,
        }}
      />
      <h2
        className="font-extrabold text-white tracking-tight mb-4 relative z-10"
        style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: "clamp(1.8rem, 4vw, 3rem)",
        }}
      >
        Ready to upgrade your meetings?
      </h2>
      <p className="text-gray-400 mb-10 font-light relative z-10">
        Join 4 million teams who already switched. No credit card required.
      </p>
      <button
        onClick={() => {
          router("/auth");
        }}
        className="inline-flex items-center gap-2 text-black font-bold text-base px-10 py-4 rounded-full transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(0,245,212,0.4)] relative z-10"
        style={{
          background: `linear-gradient(135deg, ${COLORS.cyan}, ${COLORS.violet})`,
          fontFamily: "'Syne', sans-serif",
        }}
      >
        🚀 Start for free — it takes 30 seconds
      </button>
    </div>
  );
}
