import Link from "next/link";
import InquiryLink from "./InquiryLink";

export default function ProjectTop() {
  return (
    <div className="p-top">
      <Link href="/" className="logo">
        <span>ingaze</span>
      </Link>
      <InquiryLink className="t-small lower">[ get in touch ]</InquiryLink>
    </div>
  );
}
