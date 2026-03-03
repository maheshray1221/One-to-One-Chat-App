import React from "react";
import { GradText } from "./landing-page-components/greadient";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 lg:px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
      <div
        className="font-extrabold text-xl"
        style={{ fontFamily: "'Syne', sans-serif" }}
      >
        Talk<GradText>Hub</GradText>
      </div>
      <p className="text-gray-500">© 2025 TalkHub Inc. All rights reserved.</p>
      <div className="flex gap-6">
        {["Privacy", "Terms", "Security", "Status"].map((l) => (
          <a
            key={l}
            href="#"
            className="text-gray-500 hover:text-white transition-colors duration-200"
          >
            {l}
          </a>
        ))}
      </div>
    </footer>
  );
}
