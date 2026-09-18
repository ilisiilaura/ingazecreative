import InquiryForm from "./InquiryForm";
import NewsletterForm from "./NewsletterForm";

export default function Footer() {
  return (
    <footer className="page" style={{ marginTop: "var(--space-section)" }}>
      <hr className="rule" />
      <InquiryForm />

      <hr className="rule" style={{ marginTop: "var(--s-8)" }} />
      <div className="grid" style={{ padding: "var(--s-6) 0 var(--s-8)" }}>
        <div style={{ gridColumn: "1/4" }}>
          <p className="t-body" style={{ margin: 0 }}>
            Occasional notes from ingaze.
          </p>
          <NewsletterForm />
        </div>
        <div className="col t-small muted" style={{ gridColumn: "6/8" }}>
          <a href="mailto:ingazecreative@gmail.com" className="lower">
            ingazecreative@gmail.com
          </a>
          <span>tulum &middot; mexico &middot; working worldwide</span>
        </div>
        <div className="col t-small" style={{ gridColumn: "9/12" }}>
          <a href="https://www.instagram.com/ingaze.creative/" target="_blank" rel="noopener">
            [ instagram ]
          </a>
          <a href="/#projects">[ projects ]</a>
          <a href="/#working">[ working together ]</a>
        </div>
        <div style={{ gridColumn: "12/13" }}>
          <p className="t-wordmark muted" style={{ margin: 0 }}>
            ingaze &copy; 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
