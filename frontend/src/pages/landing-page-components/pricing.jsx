export default function Pricing({COLORS}) {
  const plans = [
    {
      name: "Starter",
      price: "$0",
      per: "/month",
      desc: "For individuals and small teams getting started with better video calls.",
      features: [
        "Up to 10 participants",
        "40-min meeting limit",
        "HD video & audio",
        "Screen sharing",
        "Chat & reactions",
      ],
      featured: false,
    },
    {
      name: "Pro",
      price: "$16",
      per: "/mo per user",
      desc: "For growing teams that need more power, more time, and more AI.",
      features: [
        "Unlimited participants",
        "Unlimited meeting time",
        "AI transcription & notes",
        "Custom meeting rooms",
        "Recording & storage",
        "Priority support",
      ],
      featured: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      per: "",
      desc: "For orgs that need advanced security, compliance, and dedicated infrastructure.",
      features: [
        "Everything in Pro",
        "SSO & SAML",
        "HIPAA / SOC 2",
        "Dedicated infra",
        "SLA guarantee",
        "Dedicated success manager",
      ],
      featured: false,
    },
  ];

  return (
    <section
      id="pricing"
      className="max-w-7xl mx-auto px-6 lg:px-10 py-24 text-center"
    >
      <p
        className="text-xs font-semibold uppercase tracking-widest mb-4"
        style={{ color: COLORS.cyan }}
      >
        Pricing
      </p>
      <h2
        className="font-extrabold tracking-tight text-white"
        style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: "clamp(1.9rem, 4vw, 3rem)",
          lineHeight: 1.1,
        }}
      >
        Simple. Transparent. Fair.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 text-left">
        {plans.map(({ name, price, per, desc, features, featured }) => (
          <div
            key={name}
            className={`rounded-3xl p-10 border relative transition-all duration-300 hover:-translate-y-1 ${featured ? "shadow-[0_0_60px_rgba(0,245,212,0.1)]" : ""}`}
            style={{
              background: featured
                ? `linear-gradient(160deg, rgba(123,47,255,0.12), rgba(0,245,212,0.04))`
                : "#0d1120",
              borderColor: featured
                ? `rgba(0,245,212,0.4)`
                : "rgba(255,255,255,0.07)",
            }}
          >
            {featured && (
              <div
                className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-black text-xs font-extrabold uppercase tracking-widest whitespace-nowrap"
                style={{
                  background: `linear-gradient(90deg, ${COLORS.cyan}, ${COLORS.violet})`,
                  fontFamily: "'Syne', sans-serif",
                }}
              >
                Most Popular
              </div>
            )}
            <p
              className="text-gray-500 text-xs uppercase tracking-widest font-semibold mb-5"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              {name}
            </p>
            <p
              className="font-extrabold text-5xl tracking-tight text-white mb-1"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              {price}
              <span className="text-base font-normal text-gray-500">{per}</span>
            </p>
            <p className="text-gray-400 text-sm leading-relaxed font-light mt-3 mb-8">
              {desc}
            </p>
            <ul className="flex flex-col gap-3 mb-9">
              {features.map((f) => (
                <li
                  key={f}
                  className="flex items-center gap-3 text-sm text-white"
                >
                  <span
                    className="text-xs font-bold"
                    style={{ color: COLORS.cyan }}
                  >
                    ✓
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <button
              className={`w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 ${featured ? "text-black hover:shadow-[0_0_30px_rgba(0,245,212,0.4)] hover:scale-105" : "text-white border border-white/10 hover:border-white/30 hover:bg-white/5"}`}
              style={
                featured
                  ? {
                      background: `linear-gradient(135deg, ${COLORS.cyan}, ${COLORS.violet})`,
                      fontFamily: "'Syne', sans-serif",
                    }
                  : { fontFamily: "'Syne', sans-serif" }
              }
            >
              {name === "Starter"
                ? "Get started free"
                : name === "Pro"
                  ? "Start Pro trial"
                  : "Talk to sales"}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
