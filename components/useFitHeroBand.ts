"use client";

import { useEffect } from "react";

// Ported from preview.html's fitHeroBand(): the hero's height is measured,
// not declared, so the fold always lands on the second project row's edge
// rather than cutting through it. Phones keep the CSS 100dvh rule instead.
export function useFitHeroBand() {
  useEffect(() => {
    function fit() {
      const hero = document.querySelector<HTMLElement>(".hero");
      const row = document.querySelector<HTMLElement>("a.row");
      if (!hero || !row) return;
      if (window.innerWidth <= 768) {
        document.documentElement.style.removeProperty("--hero-h");
        return;
      }
      const rowH = row.getBoundingClientRect().height;
      const h = Math.max(360, window.innerHeight - 2 * rowH);
      document.documentElement.style.setProperty("--hero-h", Math.round(h) + "px");
    }
    fit();
    window.addEventListener("resize", fit);
    window.addEventListener("load", fit);
    return () => {
      window.removeEventListener("resize", fit);
      window.removeEventListener("load", fit);
    };
  }, []);
}
