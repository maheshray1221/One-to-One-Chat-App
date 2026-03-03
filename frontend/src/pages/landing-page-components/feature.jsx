export function Features({COLORS}) {
  const cards = [
    {
      icon: "⚡",
      title: "Ultra-Low Latency",
      desc: "Powered by a next-gen WebRTC mesh network. No buffering, no 'you're on mute' moments — just real conversation.",
      g: [`${COLORS.cyan}33`, `${COLORS.violet}33`],
    },
    {
      icon: "🤖",
      title: "AI Meeting Notes",
      desc: "Auto-transcription with action items, summaries, and follow-ups generated instantly after every call.",
      g: [`${COLORS.pink}33`, `${COLORS.yellow}33`],
    },
    {
      icon: "🔒",
      title: "End-to-End Encrypted",
      desc: "AES-256 encryption on all streams. Your conversations are yours — no exceptions, no backdoors.",
      g: [`${COLORS.violet}33`, `${COLORS.pink}33`],
    },
    {
      icon: "🌐",
      title: "Global CDN Edge",
      desc: "600+ edge nodes across 50 countries. Your video stream is always routed through the nearest node.",
      g: [`${COLORS.yellow}33`, `${COLORS.cyan}33`],
    },
    {
      icon: "🎨",
      title: "Custom Spaces",
      desc: "Brand your meeting rooms, set persistent links, and create a professional first impression every time.",
      g: [`${COLORS.cyan}26`, `${COLORS.pink}26`],
    },
    {
      icon: "🔗",
      title: "1-Click Integrations",
      desc: "Slack, Notion, Linear, Google Calendar — TalkHub lives where your team already works.",
      g: [`${COLORS.pink}26`, `${COLORS.violet}26`],
    },
  ];

  return (
    <section id="features" className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
      <p
        className="text-xs font-semibold uppercase tracking-widest mb-4"
        style={{ color: COLORS.cyan }}
      >
        What makes us different
      </p>
      <h2
        className="font-extrabold tracking-tight text-white mb-16 max-w-xl"
        style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: "clamp(1.9rem, 4vw, 3rem)",
          lineHeight: 1.1,
        }}
      >
        Everything you need.
        <br />
        Nothing you don't.
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map(({ icon, title, desc, g }) => (
          <div
            key={title}
            className="group rounded-2xl p-9 border border-white/7 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(0,245,212,0.3)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative overflow-hidden cursor-default"
            style={{ background: "#0d1120" }}
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{
                background: `radial-gradient(circle at 0% 0%, rgba(123,47,255,0.1), transparent 60%)`,
              }}
            />
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-6 relative z-10"
              style={{
                background: `linear-gradient(135deg, ${g[0]}, ${g[1]})`,
              }}
            >
              {icon}
            </div>
            <h3
              className="font-bold text-white text-lg mb-3 relative z-10"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              {title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed font-light relative z-10">
              {desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
