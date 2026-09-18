import fs from "node:fs";
import path from "node:path";
import { Fragment } from "react";
import imageSize from "image-size";
import type { Project } from "@/lib/projects";
import { imgSrc } from "@/lib/projects";
import VideoFacade from "./VideoFacade";

const GCLASS = ["g1", "g2", "g3", "g4", "g5", "g6"];

// Ported from preview.html's renderProject(): slot follows the frame's own
// shape (ar>1 → landscape 'l', ar<0.5 → very tall 'x', else the default
// g1..g6 cycle) — computed at build time here instead of a client img.onload,
// since this runs as a server component during static generation.
function classFor(slug: string, name: string, k: number): string {
  try {
    const filePath = path.join(process.cwd(), "public", "images", slug, "web", `${name}-lg.jpg`);
    const buffer = fs.readFileSync(filePath);
    const { width, height } = imageSize(buffer);
    if (width && height) {
      const ar = width / height;
      if (ar > 1) return "l" + ((k % 2) + 1);
      if (ar < 0.5) return "x" + ((k % 2) + 1);
    }
  } catch {
    // fall through to the default cycle if the file is missing
  }
  return GCLASS[k % GCLASS.length];
}

export default function ProjectGallery({ project }: { project: Project }) {
  const groups = project.sections ?? [{ name: undefined, note: undefined, gal: project.gal ?? [] }];
  const anyFrames = groups.reduce((n, sec) => n + (sec.gal?.length ?? 0), 0);

  return (
    <div className={`gal${project.dense ? " dense" : ""}`} id="pGal">
      {project.video &&
        (() => {
          const v = project.video;
          const wrapClass = v.ratio === "9/16" ? "g1" : "g4";
          return (
            <div className={wrapClass} style={{ marginTop: "var(--space-section)" }}>
              <VideoFacade
                yt={v.yt}
                ratio={v.ratio || "16/9"}
                posterSrc={v.poster ? imgSrc(project.slug, v.poster, "lg") : undefined}
              />
            </div>
          );
        })()}

      {!anyFrames && (
        <div className="g1" style={{ gridColumn: "1/8" }}>
          <p className="t-small muted pending" style={{ padding: "var(--s-5)" }}>
            awaiting images
          </p>
        </div>
      )}

      {groups.map((sec, si) => (
        <Fragment key={si}>
          {sec.name && (
            <div className="sec-head">
              {sec.note && <p className="t-body lead">{sec.note}</p>}
              <p className="t-small muted credit">{sec.name}</p>
            </div>
          )}
          {sec.gal.map((n, k) => {
            const cap = project.cap?.[n];
            const alt = project.alt?.[n] ?? cap ?? "";
            const isFirst = si === 0 && k === 0;
            return (
              <figure key={n} id={isFirst ? "stills" : undefined} className={classFor(project.slug, n, k)}>
                <img src={imgSrc(project.slug, n, "lg")} alt={alt} />
                {cap && <figcaption className="t-micro muted">{cap}</figcaption>}
              </figure>
            );
          })}
        </Fragment>
      ))}
    </div>
  );
}
