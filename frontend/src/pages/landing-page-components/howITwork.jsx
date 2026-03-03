export function HowItWorks({COLORS}) {
  const steps = [
    { n: 1, title: "Create your space", desc: "Sign up and get a permanent, custom-branded meeting room link in under 30 seconds." },
    { n: 2, title: "Invite anyone", desc: "Share your link. No downloads, no signups required for guests — they just click and join." },
    { n: 3, title: "Collaborate in real-time", desc: "Screen share, whiteboard, react, record — everything your team needs, all in one place." },
  ];

  const participants = [
    { init: "AK", c1: COLORS.cyan, c2: COLORS.violet, name: "Alex K." },
    { init: "SM", c1: COLORS.pink, c2: COLORS.yellow, name: "Sara M." },
    { init: "JD", c1: COLORS.violet, c2: COLORS.pink, name: "James D." },
    { init: "PR", c1: COLORS.yellow, c2: COLORS.cyan, name: "Priya R." },
  ];

  return (
    <section id="how-it-works" className="max-w-7xl mx-auto px-6 lg:px-10 py-24 grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
      {/* Steps */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: COLORS.cyan }}>How it works</p>
        <h2 className="font-extrabold tracking-tight text-white mb-14" style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(1.9rem, 4vw, 3rem)", lineHeight: 1.1 }}>
          Up and running<br />in seconds.
        </h2>
        <div className="flex flex-col gap-4">
          {steps.map(({ n, title, desc }) => (
            <div key={n} className="flex gap-5 items-start p-6 rounded-xl hover:bg-white/5 transition-colors duration-200">
              <div className="w-9 h-9 flex-shrink-0 rounded-full flex items-center justify-center font-extrabold text-sm text-black" style={{ background: `linear-gradient(135deg, ${COLORS.cyan}, ${COLORS.violet})`, fontFamily: "'Syne', sans-serif" }}>{n}</div>
              <div>
                <h4 className="font-bold text-white mb-1" style={{ fontFamily: "'Syne', sans-serif" }}>{title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed font-light">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Visual */}
      <div className="rounded-3xl border border-white/10 p-8 flex flex-col gap-5 relative overflow-hidden" style={{ background: "#0d1120" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse at 100% 0%, rgba(0,245,212,0.08), transparent 60%)` }} />
        <p className="text-center text-xs uppercase tracking-widest text-gray-500">Your meeting link</p>
        <div className="rounded-xl text-center py-5 text-3xl font-extrabold tracking-widest border" style={{ fontFamily: "'Syne', sans-serif", color: COLORS.cyan, background: `rgba(0,245,212,0.06)`, borderColor: `rgba(0,245,212,0.2)` }}>
          TALK-XRAY9
        </div>
        <p className="text-center text-xs uppercase tracking-widest text-gray-500 mt-2">Participants joining</p>
        <div className="flex flex-wrap gap-2 justify-center">
          {participants.map(({ init, c1, c2, name }) => (
            <div key={init} className="flex items-center gap-2 rounded-full px-3 py-2 text-xs text-white border border-white/10 bg-white/5">
              <div className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-extrabold text-black" style={{ background: `linear-gradient(135deg, ${c1}, ${c2})` }}>{init}</div>
              {name}
            </div>
          ))}
        </div>
        <div className="rounded-xl p-4 border mt-2" style={{ background: `rgba(0,245,212,0.04)`, borderColor: `rgba(0,245,212,0.15)` }}>
          <p className="text-center text-xs uppercase tracking-widest text-gray-500 mb-2">🤖 AI Summary Ready</p>
          <p className="text-gray-400 text-xs leading-relaxed text-center">Q3 roadmap reviewed. 4 action items assigned. Next sync: Thursday 3pm.</p>
        </div>
      </div>
    </section>
  );
}