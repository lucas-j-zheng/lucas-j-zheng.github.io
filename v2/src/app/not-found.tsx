import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = { title: "404" };

export default function NotFound() {
  return (
    <div className="page">
      <article className="article">
        <h1>404</h1>
        <p className="meta" style={{ fontStyle: "italic" }}>
          You&rsquo;ve wandered outside the support of the state distribution.
        </p>
        <p className="exts">
          <Link href="/">Return to s&#8320;</Link>
        </p>
      </article>
      <SiteFooter />
    </div>
  );
}
