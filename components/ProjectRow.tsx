import Link from "next/link";
import type { CSSProperties } from "react";

type StripImage = {
  src: string;
  focus: string;
  variant?: "dt-only" | "mob-only";
};

function focusStyle(focus: string): CSSProperties {
  return { "--focus": focus } as CSSProperties;
}

export default function ProjectRow({
  slug,
  title,
  tags,
  images,
}: {
  slug: string;
  title: string;
  tags: string;
  images: StripImage[];
}) {
  return (
    <Link className="row" href={`/projects/${slug}`}>
      <h3 className="t-row">{title}</h3>
      <p className="t-small tags muted">{tags}</p>
      <div className="strip">
        {images.map((img) => (
          <img
            key={img.src}
            className={img.variant}
            style={focusStyle(img.focus)}
            src={img.src}
            alt=""
          />
        ))}
      </div>
    </Link>
  );
}
