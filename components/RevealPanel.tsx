import { forwardRef } from "react";

// Ported from preview.html's #reveal markup. Open/close animation logic
// lives in the parent (Hero) since this panel must be a flex sibling of
// .hero-top, not nested inside it.
const RevealPanel = forwardRef<HTMLDivElement, { open: boolean }>(function RevealPanel(
  { open },
  ref
) {
  return (
    <div className="reveal" ref={ref} data-open={open ? "" : undefined}>
      <div className="reveal-inner rev-spread">
        <figure className="rev-portrait">
          <img
            src="/images/about/laura-lg.jpg"
            width={933}
            height={1400}
            alt="Laura Ilisii sitting on limestone rock at golden hour in white linen, looking to camera."
          />
        </figure>
        <div className="rev-cols">
          <section className="rev-practice">
            <p className="t-micro muted rev-label">the practice</p>
            <p className="t-body">
              Before the image, there is the person, the place, the idea, the
              instinct, the collection of things that sets us in motion.
            </p>
            <p className="t-body">That is where I like to begin.</p>
            <p className="t-body">
              ingaze is a creative practice by Laura Ilisii, working across
              photography, moving image and creative direction. I&rsquo;m
              interested in what happens when we look closely enough at the
              inner spark to find the visual language that translates it, to
              look at the familiar with new eyes.
            </p>
            <p className="t-body">
              There is room for contradiction. For softness and intensity,
              restraint and excess, stillness and movement. For the parts
              that are polished and the parts that are more human. Not
              everything needs to look the same to feel considered.
            </p>
            <p className="t-body">
              My role is to pay attention, find what is specific, and
              translate it into images.
            </p>
            <p className="t-body">
              Sometimes that means directing. Sometimes it means stepping
              back. Sometimes it means making space for the unexpected to
              appear.
            </p>
            <p className="t-body">The work begins within, and moves outward.</p>
            <p className="t-body">That is the gaze.</p>
          </section>
          <section className="rev-laura">
            <p className="t-micro muted rev-label">laura</p>
            <div className="rev-laura-body">
              <div className="rev-laura-text">
                <p className="t-body">I&rsquo;m Laura, the person behind ingaze.</p>
                <p className="t-body">
                  I&rsquo;ve always been interested in what is happening
                  underneath anything, and in the space between what
                  something is and how it is perceived. Like the person
                  behind the image, the place behind the atmosphere, the work
                  behind the finished thing.
                </p>
                <p className="t-body">
                  Photography became the way I learned to look closely at all
                  of that.
                </p>
                <p className="t-body">
                  My background moves between creative direction,
                  photography, events, people, places and very different
                  kinds of creative worlds. I&rsquo;ve lived in Romania,
                  Mexico and Canada, and spent years working alongside
                  artists, founders, makers and people building things of
                  their own.
                </p>
                <p className="t-body">
                  What I bring to a project is not a fixed aesthetic.
                  It&rsquo;s an eye, a way of paying attention, and a
                  willingness to understand what is already there before
                  deciding how to frame it.
                </p>
                <p className="t-body">That is what I&rsquo;m interested in.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
});

export default RevealPanel;
