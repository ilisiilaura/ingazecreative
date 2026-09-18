"use client";

// Ported from preview.html's [data-inquiry] click delegate: scrolls the
// nearest .inquiry form into view and focuses its first field once the
// scroll settles.
export default function InquiryLink({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  function onClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    const form = document.querySelector<HTMLElement>(".inquiry");
    if (!form) return;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    form.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    const first = form.querySelector<HTMLInputElement>("input");
    if (first) setTimeout(() => first.focus({ preventScroll: true }), reduce ? 0 : 600);
  }

  return (
    <a href="#" className={className} onClick={onClick}>
      {children}
    </a>
  );
}
