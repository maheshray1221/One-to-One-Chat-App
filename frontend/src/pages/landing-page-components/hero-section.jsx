import { useNavigate } from "react-router-dom";
import { GradText } from "./greadient";

export function Hero({ COLORS }) {
  const router = useNavigate();
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-32 pb-20 overflow-hidden">
      {/* Glow orbs */}
      <div
        className="absolute top-[-100px] left-[-150px] w-[600px] h-[600px] rounded-full opacity-25 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${COLORS.violet}, transparent 70%)`,
          filter: "blur(100px)",
          animation: "drift1 8s ease-in-out infinite alternate",
        }}
      />
      <div
        className="absolute bottom-0 right-[-100px] w-[500px] h-[500px] rounded-full opacity-20 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${COLORS.cyan}, transparent 70%)`,
          filter: "blur(100px)",
          animation: "drift2 10s ease-in-out infinite alternate",
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-10 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${COLORS.pink}, transparent 70%)`,
          filter: "blur(90px)",
          animation: "drift3 12s ease-in-out infinite alternate",
        }}
      />

      {/* Badge */}
      <div
        className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase mb-10 animate-fadeUp"
        style={{
          background: "rgba(255,255,255,0.04)",
          border: `1px solid rgba(0,245,212,0.35)`,
          color: COLORS.cyan,
        }}
      >
        <span
          className="w-2 h-2 rounded-full inline-block"
          style={{ background: COLORS.cyan, animation: "pulse 2s infinite" }}
        />
        Next-Generation Video Conferencing
      </div>

      {/* Headline */}
      <h1
        className="font-extrabold leading-[1.02] tracking-tight text-white animate-fadeUp"
        style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
          animationDelay: "0.1s",
        }}
      >
        Meetings that feel
        <br />
        <GradText>actually alive.</GradText>
      </h1>

      {/* Sub */}
      <p
        className="mt-7 text-gray-400 max-w-xl leading-relaxed font-light text-base md:text-lg animate-fadeUp"
        style={{ animationDelay: "0.2s" }}
      >
        TalkHub reimagines video calls with crystal-clear HD, zero-lag audio,
        and collaborative tools built for the way teams actually work — not how
        they did in 2013.
      </p>

      {/* Actions */}
      <div
        className="mt-12 flex flex-col sm:flex-row gap-4 items-center animate-fadeUp"
        style={{ animationDelay: "0.3s" }}
      >
        <button
          onClick={() => {
            router("/auth");
          }}
          className="flex items-center gap-2 text-black font-bold text-base px-8 py-4 rounded-full transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(0,245,212,0.4)]"
          style={{
            background: `linear-gradient(135deg, ${COLORS.cyan}, ${COLORS.violet})`,
            fontFamily: "'Syne', sans-serif",
          }}
        >
          🚀 Start for free
        </button>
        <button className="flex items-center gap-2 text-white text-base px-8 py-4 rounded-full border border-white/10 hover:border-white/30 transition-all">
          ▶ Watch demo
        </button>
      </div>

      {/* Preview window */}
      <div
        className="mt-20 w-full max-w-3xl animate-fadeUp"
        style={{ animationDelay: "0.5s" }}
      >
        <div
          className="rounded-2xl overflow-hidden border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.6)]"
          style={{ background: "#0d1120" }}
        >
          {/* Window bar */}
          <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/10 bg-white/5">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <span className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>

          {/* Video grid */}
          <div className="grid grid-cols-3 grid-rows-2 gap-px bg-black">
            {/* Main tile */}
            <div className="col-span-2 row-span-2 relative bg-[#0d1120] flex items-center justify-center aspect-video">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center font-extrabold text-xl text-black"
                style={{
                  background: `linear-gradient(135deg, ${COLORS.cyan}, ${COLORS.violet})`,
                  fontFamily: "'Syne', sans-serif",
                }}
              >
                AK
              </div>
              <div
                className="absolute inset-0 border-2 pointer-events-none"
                style={{
                  borderColor: COLORS.cyan,
                  animation: "speakPulse 2s ease infinite",
                }}
              />
              <span className="absolute bottom-2.5 left-2.5 text-xs bg-black/60 rounded px-2 py-0.5 text-white">
                Alex K. (you)
              </span>
            </div>
            {[
              ["SM", COLORS.pink, COLORS.yellow, "Sara M."],
              ["JD", COLORS.violet, COLORS.pink, "James D."],
              ["PR", COLORS.yellow, COLORS.cyan, "Priya R."],
            ].map(([init, c1, c2, name]) => (
              <div
                key={init}
                className="relative bg-[#0d1120] flex items-center justify-center"
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-extrabold text-sm text-black"
                  style={{
                    background: `linear-gradient(135deg, ${c1}, ${c2})`,
                    fontFamily: "'Syne', sans-serif",
                  }}
                >
                  {init}
                </div>
                <span className="absolute bottom-1.5 left-1.5 text-[10px] bg-black/60 rounded px-1.5 py-0.5 text-white">
                  {name}
                </span>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-3 py-4 border-t border-white/10">
            {["🎤", "📷", "🖥️", "💬"].map((icon) => (
              <div
                key={icon}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white/8 text-base border border-white/10"
              >
                {icon}
              </div>
            ))}
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-base"
              style={{ background: COLORS.pink }}
            >
              📵
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
