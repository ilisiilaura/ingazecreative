"use client";

import { useState } from "react";

export default function VideoFacade({
  yt,
  ratio,
  posterSrc,
}: {
  yt?: string;
  ratio: string;
  posterSrc?: string;
}) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="video" id="video" style={{ "--video-ratio": ratio } as React.CSSProperties}>
      {playing && yt ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${yt}?autoplay=1&rel=0&modestbranding=1`}
          title="film"
          allow="autoplay; fullscreen"
          allowFullScreen
          loading="lazy"
        />
      ) : yt ? (
        <>
          {posterSrc && <img src={posterSrc} alt="" />}
          <button type="button" onClick={() => setPlaying(true)}>
            watch the film
          </button>
        </>
      ) : (
        <span className="t-micro muted">video &middot; {ratio} &middot; awaiting link</span>
      )}
    </div>
  );
}
