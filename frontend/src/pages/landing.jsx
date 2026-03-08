import {useEffect } from "react";
import { Navbar } from "./navBar";
import Footer from "./footer";
import { Hero } from "./landing-page-components/hero-section";
import { Stats } from "./landing-page-components/stats";
import { Features } from "./landing-page-components/feature";
import { HowItWorks } from "./landing-page-components/howITwork";
import Pricing from "./landing-page-components/pricing";
import CTABanner from "./landing-page-components/ctaBanner";

const COLORS = {
  cyan: "#00f5d4",
  violet: "#7b2fff",
  pink: "#ff2d78",
  yellow: "#f9e230",
};



/* ─── Global styles injected ─── */
const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

  body { font-family: 'DM Sans', sans-serif; background: #050810; color: #e8eaf6; margin: 0; overflow-x: hidden; }

  @keyframes shimmer { from { background-position: 0%; } to { background-position: 200%; } }
  @keyframes drift1 { from { transform: translate(0,0); } to { transform: translate(60px,40px); } }
  @keyframes drift2 { from { transform: translate(0,0); } to { transform: translate(-40px,-60px); } }
  @keyframes drift3 { from { transform: translate(-50%,-50%); } to { transform: translate(-45%,-55%); } }
  @keyframes pulse { 0%,100% { opacity:1; transform:scale(1); } 50% { opacity:0.5; transform:scale(1.5); } }
  @keyframes speakPulse { 0%,100% { opacity:1; } 50% { opacity:0.3; } }
  @keyframes fadeUp { from { opacity:0; transform:translateY(30px); } to { opacity:1; transform:translateY(0); } }

  .animate-fadeUp { animation: fadeUp 0.8s ease both; }
  .bg-white\\/5 { background: rgba(255,255,255,0.05); }
  .bg-white\\/8 { background: rgba(255,255,255,0.08); }
  .border-white\\/7 { border-color: rgba(255,255,255,0.07); }
`;

export default function LandingPage() {
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = globalStyles;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <div className="min-h-screen bg-[#050810]">
      <Navbar COLORS={COLORS} />
      <Hero COLORS={COLORS}/>
      <Stats COLORS={COLORS}/>
      <Features COLORS={COLORS} />
      <HowItWorks COLORS={COLORS} />
      <Pricing COLORS={COLORS}/>
      <CTABanner COLORS={COLORS} />
      <Footer />
    </div>
  );
}
