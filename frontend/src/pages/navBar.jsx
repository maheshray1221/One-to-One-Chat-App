import { useEffect, useState } from "react";
import { GradText } from "./landing-page-components/greadient";
import { useNavigate } from "react-router-dom";
export function Navbar({ COLORS }) {
  const router = useNavigate();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Features", "How it works", "Pricing", "Blog"];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "backdrop-blur-xl border-b border-white/10 bg-[#050810]/70" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex items-center justify-between">
        {/* Logo */}
        <div
          className="font-extrabold text-2xl tracking-tight"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          Talk<GradText>Hub</GradText>
        </div>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-10 list-none">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase().replace(/\s/g, "-")}`}
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200 tracking-wide"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          onClick={() => {
            router("/auth");
          }}
          className="hidden md:flex items-center gap-2 text-black font-bold text-sm px-6 py-2.5 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-[0_0_24px_rgba(0,245,212,0.4)]"
          style={{
            background: `linear-gradient(135deg, ${COLORS.cyan}, ${COLORS.violet})`,
            fontFamily: "'Syne', sans-serif",
          }}
        >
          Start Free →
        </button>

        {/* Hamburger */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0d1120]/95 backdrop-blur-xl border-t border-white/10 px-6 pb-6 pt-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase().replace(/\s/g, "-")}`}
              className="text-gray-300 text-base py-1"
              onClick={() => setOpen(false)}
            >
              {l}
            </a>
          ))}
          <button
          onClick={() => {
            router("/auth");
          }}
            className="mt-2 text-black font-bold text-sm px-6 py-3 rounded-full w-full"
            style={{
              background: `linear-gradient(135deg, ${COLORS.cyan}, ${COLORS.violet})`,
              fontFamily: "'Syne', sans-serif",
            }}
          >
            Start Free →
          </button>
        </div>
      )}
    </nav>
  );
}
