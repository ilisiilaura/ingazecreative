import Loader from "@/components/Loader";
import Hero from "@/components/Hero";
import ProjectRow from "@/components/ProjectRow";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main id="home">
      <Loader />
      <Hero />

      <section className="projects" id="projects">
        <ProjectRow
          slug="personal-brand"
          title="personal brand"
          tags="portrait · visual direction"
          images={[
            { src: "/images/personal-brand/web/c16-sm.jpg", focus: "50% 20%" },
            { src: "/images/personal-brand/web/pbrow-sm.jpg", focus: "50% 40%" },
            { src: "/images/personal-brand/web/e03dt-sm.jpg", focus: "50% 50%", variant: "dt-only" },
            { src: "/images/personal-brand/web/e03row-mob.jpg", focus: "50% 45%", variant: "mob-only" },
          ]}
        />
        <ProjectRow
          slug="commercial"
          title="commercial"
          tags="brands · product"
          images={[
            { src: "/images/commercial/web/cmrow-sm.jpg", focus: "50% 50%" },
            { src: "/images/commercial/web/x043-sm.jpg", focus: "50% 42%" },
            { src: "/images/commercial/web/x010-sm.jpg", focus: "50% 50%" },
          ]}
        />
        <ProjectRow
          slug="artisan-series"
          title="artisan series"
          tags="craft · film"
          images={[
            { src: "/images/artisan-series/web/arrow-sm.jpg", focus: "50% 40%" },
            { src: "/images/artisan-series/web/g04row-dt.jpg", focus: "50% 45%", variant: "dt-only" },
            { src: "/images/artisan-series/web/g04row-mob.jpg", focus: "50% 50%", variant: "mob-only" },
            { src: "/images/artisan-series/web/p02row-sm.jpg", focus: "50% 50%" },
          ]}
        />
      </section>

      <section id="working" className="page" style={{ paddingTop: "var(--space-section)" }}>
        <h2 className="t-statement">working together</h2>
        <p className="t-small tags muted" style={{ margin: "var(--s-4) 0 0" }}>
          photography &middot; video &middot; creative direction
        </p>

        <div className="grid after-statement">
          <div style={{ gridColumn: "1/8" }}>
            <p className="t-body" style={{ margin: 0 }}>
              Maybe you&rsquo;ve simply outgrown how you&rsquo;re currently
              portrayed. The images say where you used to be, not where you
              are now. Maybe you&rsquo;re building something new and need the
              visual language to catch up with your ideas, or help make them
              real.
            </p>
            <p className="t-body" style={{ margin: "var(--s-5) 0 0" }}>
              Every project starts by understanding what you&rsquo;re
              building, what makes it yours, and what the work needs to
              communicate. From there, we map the visual world together.
            </p>
          </div>
        </div>

        <div style={{ marginTop: "var(--space-block)" }}>
          <p className="t-micro muted" style={{ margin: "0 0 var(--s-4)" }}>
            direction
          </p>
          <hr className="rule" />
          <div className="grid" style={{ marginTop: "var(--s-4)" }}>
            <div style={{ gridColumn: "1/7" }}>
              <p className="t-body" style={{ margin: "0 0 var(--s-4)" }}>
                Before anything is shot, we find the world.
              </p>
              <p className="t-body" style={{ margin: "0 0 var(--s-4)" }}>
                That might mean references, mood, locations, movement, light,
                styling and a clear idea of what the finished work needs to
                communicate. For film, that means turning the story into a
                sequence of scenes and shots, so the visual language is clear
                before we arrive.
              </p>
              <p className="t-body" style={{ margin: 0 }}>
                Sometimes you already know exactly what you want. Sometimes
                you know the feeling, but not yet the language for it.
              </p>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "var(--space-block)" }}>
          <p className="t-micro muted" style={{ margin: "0 0 var(--s-4)" }}>
            making
          </p>
          <hr className="rule" />
          <div className="grid" style={{ marginTop: "var(--s-4)" }}>
            <div style={{ gridColumn: "1/7" }}>
              <p className="t-body" style={{ margin: "0 0 var(--s-4)" }}>
                Then we make it.
              </p>
              <p className="t-body" style={{ margin: "0 0 var(--s-4)" }}>
                A portrait series, a personal brand story, a campaign,
                product imagery, a film, a documentary piece, or something
                that doesn&rsquo;t fit neatly into a category.
              </p>
              <p className="t-body" style={{ margin: 0 }}>
                I lead where leading is useful, leave space where it
                isn&rsquo;t, and shape the final work through the edit.
              </p>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "var(--space-block)" }}>
          <p className="t-micro muted" style={{ margin: "0 0 var(--s-4)" }}>
            how it starts
          </p>
          <hr className="rule" />
          <div className="grid" style={{ marginTop: "var(--s-4)" }}>
            <div style={{ gridColumn: "1/7" }}>
              <p className="t-body" style={{ margin: "0 0 var(--s-4)" }}>
                A conversation first.
              </p>
              <p className="t-body" style={{ margin: 0 }}>
                Tell me what you&rsquo;re building, where you&rsquo;re at and
                what you need the work to do. From there, I&rsquo;ll shape a
                proposal around the project, the direction I think will serve
                it best, and the way we can make it work.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
