import { useEffect, useRef, useState } from "react";

/* ─── Utility: animated counter ─── */
function useCountUp(target, duration = 1800, started = false) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!started) return;
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      setVal(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);
  return val;
}

export function Stats({COLORS}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const users = useCountUp(4, 1500, visible);
  const uptime = useCountUp(999, 1800, visible);
  const countries = useCountUp(180, 1500, visible);

  const stats = [
    { value: `${users}M+`, label: "Active Users" },
    { value: `${(uptime / 10).toFixed(1)}%`, label: "Uptime SLA" },
    { value: "<40ms", label: "Avg Latency" },
    { value: `${countries}+`, label: "Countries" },
  ];

  return (
    <div ref={ref}>
      <div
        className="h-px mx-10 md:mx-16 opacity-40"
        style={{
          background: `linear-gradient(90deg, transparent, ${COLORS.cyan}, ${COLORS.violet}, ${COLORS.pink}, transparent)`,
        }}
      />
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-8 py-16 text-center">
        {stats.map(({ value, label }) => (
          <div key={label}>
            <div
              className="font-extrabold text-4xl tracking-tight bg-clip-text text-transparent"
              style={{
                fontFamily: "'Syne', sans-serif",
                backgroundImage: `linear-gradient(135deg, ${COLORS.cyan}, ${COLORS.violet})`,
              }}
            >
              {value}
            </div>
            <div className="text-gray-500 text-xs uppercase tracking-widest mt-2">
              {label}
            </div>
          </div>
        ))}
      </div>
      <div
        className="h-px mx-10 md:mx-16 opacity-40"
        style={{
          background: `linear-gradient(90deg, transparent, ${COLORS.cyan}, ${COLORS.violet}, ${COLORS.pink}, transparent)`,
        }}
      />
    </div>
  );
}
