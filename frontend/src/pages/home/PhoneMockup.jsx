import { useState ,useEffect} from "react";

export const PhoneMockup = () => {
  const [seconds, setSeconds] = useState(272);
  useEffect(() => {
    const t = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(t);
  }, []);
  const fmt = (s) =>
    `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

  return (
    <div
      className="w-[250px] h-[480px] bg-[#161d2e] border-2 border-white/10 rounded-[42px] relative shadow-[0_40px_80px_rgba(0,0,0,0.5)] overflow-hidden"
      style={{ animation: "float 4s ease-in-out infinite" }}
    >
      <div className="w-24 h-6 bg-[#0a0e1a] rounded-b-2xl absolute top-0 left-1/2 -translate-x-1/2 z-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a2240] to-[#0f1628] flex flex-col items-center justify-center gap-4 p-5">
        <div
          className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-3xl"
          style={{
            boxShadow:
              "0 0 0 8px rgba(79,142,247,0.2), 0 0 0 16px rgba(79,142,247,0.08)",
            animation: "ring 3s ease infinite",
          }}
        >
          👩
        </div>
        <div className="font-bold text-white text-base">Priya Sharma</div>
        <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-medium">
          <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
          Connected
        </div>
        <div className="text-2xl font-bold text-slate-400 tracking-widest">
          {fmt(seconds)}
        </div>
        <div className="flex gap-3 mt-2">
          <button className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-lg hover:bg-white/20 transition-colors">
            🎙️
          </button>
          <button className="w-11 h-11 rounded-full bg-red-500 flex items-center justify-center text-lg shadow-[0_4px_15px_rgba(239,68,68,0.4)] hover:bg-red-600 transition-colors">
            📵
          </button>
          <button className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-lg hover:bg-white/20 transition-colors">
            📹
          </button>
        </div>
      </div>
    </div>
  );
};
