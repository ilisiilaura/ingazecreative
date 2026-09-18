import Link from "next/link";
import { notFound } from "next/navigation";
import { PROJECTS, getProject, imgSrc } from "@/lib/projects";
import ProjectTop from "@/components/ProjectTop";
import ProjectGallery from "@/components/ProjectGallery";
import MetaLine from "@/components/MetaLine";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const index = PROJECTS.findIndex((p) => p.slug === project.slug);
  const next = PROJECTS[(index + 1) % PROJECTS.length];
  const heroAlt = project.alt?.[project.hero] ?? project.title;

  return (
    <main id="project">
      <section className={`p-hero${project.heroInset ? " has-inset" : ""}`}>
        <img
          className="shot"
          alt={heroAlt}
          src={imgSrc(project.slug, project.hero, "lg")}
          style={{
            height: project.heroHeight || undefined,
            objectPosition: project.heroFocus || "center",
            transform: project.heroZoom ? `scale(${project.heroZoom})` : undefined,
          }}
        />
        <ProjectTop />
        <div className="p-titlewrap">
          <h1 className="t-project">{project.title}</h1>
        </div>
        {project.heroInset && (
          <img className="p-inset" alt="" src={imgSrc(project.slug, project.hero, "lg")} />
        )}
      </section>

      <div className="page">
        <MetaLine meta={project.meta} hasVideo={!!project.video} />
      </div>

      <section className="page" style={{ marginTop: "var(--space-block)" }}>
        <div className="grid">
          <div className="t-body p-text-cols" style={{ gridColumn: "1/13" }}>
            {project.statement.map((par, i) => (
              <p key={i}>{par}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="page">
        <ProjectGallery project={project} />

        <div style={{ marginTop: "var(--space-block)" }}>
          <p className="t-micro muted" style={{ margin: "0 0 var(--s-3)" }}>
            credits
          </p>
          <p className="t-micro muted" style={{ margin: 0, lineHeight: 1.9 }}>
            direction, photography &mdash; laura ilisii
          </p>
        </div>

        <Link className="pill" href={`/projects/${next.slug}`}>
          <img src={imgSrc(next.slug, next.hero, "sm")} alt="" />
          <span className="t-small">next &mdash; {next.title}</span>
          <span className="t-small">&rsaquo;</span>
        </Link>
      </section>

      <Footer />
    </main>
  );
}
