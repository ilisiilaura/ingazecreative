import { Fragment } from "react";

// Ported from renderProject()'s meta regex: the words "video" and "stills"
// in the meta line become in-page jump links when the project has that
// content, targeting the #video / #stills anchors ProjectGallery sets.
export default function MetaLine({ meta, hasVideo }: { meta: string; hasVideo: boolean }) {
  const parts = meta.split(/\b(video|stills)\b/);
  return (
    <p className="t-small muted p-meta">
      {parts.map((part, i) => {
        if (part === "video" && hasVideo) {
          return (
            <a key={i} href="#video">
              video
            </a>
          );
        }
        if (part === "stills") {
          return (
            <a key={i} href="#stills">
              stills
            </a>
          );
        }
        return <Fragment key={i}>{part}</Fragment>;
      })}
    </p>
  );
}
