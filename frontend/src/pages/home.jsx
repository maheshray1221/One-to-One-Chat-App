import { useContext } from "react";
import { useState, useEffect } from "react";
import { PhoneMockup } from "./home/PhoneMockup";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { GradText } from "./landing-page-components/greadient";
import withAuth from "../utils/withAuth";


const Badge = () => (
  <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-1.5 text-sm text-blue-400 font-medium mb-7">
    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
    Crystal Clear Video & Audio
  </div>
);

const StatItem = ({ num, label }) => (
  <div>
    <div className="text-2xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
      {num}
    </div>
    <div className="text-xs text-slate-500 mt-0.5">{label}</div>
  </div>
);

const FeatureCard = ({ icon, title, desc }) => (
  <div className="bg-[#161d2e] border border-white/7 rounded-2xl p-7 hover:-translate-y-1 hover:border-blue-500/30 transition-all duration-300 group relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-xl mb-4">
      {icon}
    </div>
    <div className="font-bold text-base text-white mb-2">{title}</div>
    <div className="text-slate-400 text-sm leading-relaxed">{desc}</div>
  </div>
);

const FloatCard = ({ icon, iconBg, title, sub, className }) => (
  <div
    className={`absolute bg-[#161d2e] border border-white/10 rounded-2xl px-4 py-3 flex items-center gap-3 shadow-2xl backdrop-blur-md text-sm whitespace-nowrap z-10 ${className}`}
  >
    <div
      className={`w-8 h-8 rounded-lg flex items-center justify-center text-base ${iconBg}`}
    >
      {icon}
    </div>
    <div>
      <div className="font-semibold text-white text-xs">{title}</div>
      <div className="text-slate-400 text-xs">{sub}</div>
    </div>
  </div>
);

 function HomeComponent() {
  let navigate = useNavigate();
  const [meetingCode, setMeetingCode] = useState("");

  const { addToUserHistory } = useContext(AuthContext);
  let handleJoinVideoCall = async () => {
    await addToUserHistory(meetingCode);
    navigate(`/${meetingCode}`);
  };

  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white font-sans overflow-x-hidden relative">
      {/* BG Orbs */}
      <div className="fixed top-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full bg-blue-500 opacity-[0.08] blur-[80px] pointer-events-none" />
      <div className="fixed bottom-[-80px] left-[-80px] w-[350px] h-[350px] rounded-full bg-purple-500 opacity-[0.08] blur-[80px] pointer-events-none" />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 backdrop-blur-xl bg-[#0a0e1a]/60 border-b border-white/5">
        
        <div
          className="font-extrabold text-2xl tracking-tight"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          Talk<GradText>Hub</GradText>
        </div>
        <div className="flex items-center gap-6">
          <a
            onClick={() => {
              navigate("/history");
            }}
            href="#"
            className="flex items-center gap-1.5 text-slate-400 hover:text-white text-sm font-medium transition-colors"
          >
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12,6 12,12 16,14" />
            </svg>
            <span className="hidden sm:inline">History</span>
          </a>
          <button
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/auth");
            }}
            className="bg-white/7 border border-white/10 hover:bg-white/12 hover:border-white/20 text-white px-5 py-2 rounded-lg text-sm font-medium transition-all"
          >
            Logout
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative z-10 min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center px-6 md:px-12 pt-28 pb-16 gap-10 max-w-7xl mx-auto">
        {/* Left */}
        <div className="max-w-xl">
          <Badge />
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-5">
            Connect Without
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Limits
            </span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed font-light mb-10 max-w-md">
            Quality video calls for everyone. Join meetings instantly,
            collaborate seamlessly, and stay connected with the people that
            matter.
          </p>

          {/* Join Card */}
          <div className="bg-[#161d2e] border border-white/8 rounded-2xl p-8 max-w-md relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
            <div className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
              Join a Meeting
            </div>
            <div className="flex gap-3 mb-5">
              <input
                value={meetingCode}
                onChange={(e) => setMeetingCode(e.target.value)}
                placeholder="Enter meeting code..."
                className="flex-1 bg-white/5 border border-white/10 focus:border-blue-500 focus:bg-blue-500/5 focus:ring-2 focus:ring-blue-500/20 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-all"
              />
              <button
                onClick={handleJoinVideoCall}
                className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:shadow-[0_8px_30px_rgba(79,142,247,0.5)] hover:-translate-y-0.5 text-white px-6 py-3 rounded-xl text-sm font-semibold transition-all shadow-[0_4px_20px_rgba(79,142,247,0.35)] whitespace-nowrap"
              >
                Join →
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-9">
            <StatItem num="2M+" label="Active Users" />
            <StatItem num="99.9%" label="Uptime" />
            <StatItem num="HD" label="Video Quality" />
          </div>
        </div>

        {/* Right */}
        <div className="hidden lg:flex justify-center items-center relative h-[500px]">
          <FloatCard
            icon="✅"
            iconBg="bg-emerald-400/15"
            title="Meeting Started"
            sub="3 participants joined"
            className="top-10 left-0"
            style={{ animation: "floatCard 5s ease-in-out infinite" }}
          />
          <FloatCard
            icon="🔒"
            iconBg="bg-blue-400/15"
            title="End-to-End Encrypted"
            sub="Your call is secure"
            className="bottom-20 right-0"
            style={{ animation: "floatCard 5s 2s ease-in-out infinite" }}
          />
          <PhoneMockup />
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 px-6 md:px-12 pb-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <FeatureCard
            icon="🎥"
            title="HD Video Quality"
            desc="Crystal-clear 1080p video that adapts to your connection automatically."
          />
          <FeatureCard
            icon="🔒"
            title="Secure & Private"
            desc="End-to-end encryption keeps every conversation completely private."
          />
          <FeatureCard
            icon="⚡"
            title="Instant Join"
            desc="No downloads needed. Just enter a code and you're in — instantly."
          />
        </div>
      </section>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(-2deg); }
          50% { transform: translateY(-14px) rotate(-2deg); }
        }
        @keyframes ring {
          0%, 100% { box-shadow: 0 0 0 8px rgba(79,142,247,0.2), 0 0 0 16px rgba(79,142,247,0.08); }
          50% { box-shadow: 0 0 0 12px rgba(79,142,247,0.25), 0 0 0 24px rgba(79,142,247,0.1); }
        }
        @keyframes floatCard {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
    </div>
  );
}


export default withAuth(HomeComponent);