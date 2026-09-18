"use client";

import { useEffect, useRef, useState } from "react";
import { useFitHeroBand } from "./useFitHeroBand";
import RevealPanel from "./RevealPanel";

export default function Hero() {
  useFitHeroBand();

  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLAnchorElement>(null);

  // Ported from preview.html's revOpen/revClose: height starts at 'auto'
  // only once the open transition finishes (auto can't be animated), and
  // closing re-pins the measured height for one frame before collapsing.
  useEffect(() => {
    const rv = panelRef.current;
    if (!rv) return;
    if (open) {
      rv.style.height = rv.scrollHeight + "px";
      const onEnd = () => {
        rv.style.height = "auto";
      };
      rv.addEventListener("transitionend", onEnd, { once: true });
      return () => rv.removeEventListener("transitionend", onEnd);
    } else {
      if (!rv.style.height || rv.style.height === "0px") return;
      rv.style.height = rv.scrollHeight + "px";
      void rv.offsetHeight; // force reflow before collapsing, or it won't animate
      rv.style.height = "0px";
    }
  }, [open]);

  useEffect(() => {
    function onPointerDown(e: PointerEvent) {
      if (!open) return;
      const target = e.target as Node;
      if (btnRef.current?.contains(target)) return;
      if (panelRef.current?.contains(target)) return;
      setOpen(false);
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("pointerdown", onPointerDown, true);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown, true);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <section className="hero">
      <div className="hero-bg">
        <img
          src="/images/hero.jpg"
          alt=""
          onError={(e) => {
            e.currentTarget.src = "/images/analog/a01-lg.jpg";
          }}
        />
      </div>
      <div className="hero-in">
        <div className="hero-top">
          <a href="/" className="logo">
            <span>ingaze</span>
          </a>
          <a
            href="#"
            ref={btnRef}
            className="t-small lower rev-cta"
            aria-expanded={open}
            onClick={(e) => {
              e.preventDefault();
              setOpen((v) => !v);
            }}
          >
            [ this is ingaze ]
          </a>
        </div>

        <RevealPanel ref={panelRef} open={open} />

        <div className="spacer" />

        <div className="hero-low">
          <div>
            <h1 className="t-hero">
              a creative
              <br />
              practice<span className="byline">by laura ilisii</span>
            </h1>
          </div>
          <p className="t-hero-sub">
            exploring people, place, nature and the stories that connect them
          </p>
        </div>

        <hr className="hero-rule" />

        <div className="hero-bottom t-small">
          <div className="group">
            <span>stories, stills and moving frames</span>
            <span>tulum &middot; mexico &middot; working worldwide</span>
            <a href="https://www.instagram.com/ingaze.creative/" target="_blank" rel="noopener">
              [ instagram ]
            </a>
          </div>
          <div className="group links">
            <a href="#projects">[ projects ]</a>
            <a href="#working">[ working together ]</a>
            <a
              className="ig-mobile"
              href="https://www.instagram.com/ingaze.creative/"
              target="_blank"
              rel="noopener"
            >
              [ instagram ]
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
