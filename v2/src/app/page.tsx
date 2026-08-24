import Link from "next/link";
import { getAll } from "@/lib/content";
import ItemRow from "@/components/ItemRow";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  const research = getAll("research");
  const projects = getAll("projects");
  const writing = getAll("writing");
  const featured = projects.filter((p) => p.meta.featured);

  return (
    <div className="page">
      <section className="hero">
        <div className="hero-text">
          <h1>Lucas Zheng</h1>
        <p>
          CS + Applied Math at Brown&nbsp;&rsquo;27. I do hierarchical
          reinforcement learning research at Prof.&nbsp;Konidaris&rsquo;s{" "}
          <a href="http://irl.cs.brown.edu/">Intelligent Robot&nbsp;Lab</a>, and
          I build things: forecasting models, agents, world models.
        </p>
        <p className="aside">
          Lately I&rsquo;ve been exploring world models and robotics, and
          following the 2026 Senate races closely (I&rsquo;m building a
          forecast).
        </p>
        <p className="links">
          <a href="https://github.com/lucas-j-zheng">GitHub</a>
          <span className="sep">&middot;</span>
          <a href="https://linkedin.com/in/lucas-j-zheng">LinkedIn</a>
          <span className="sep">&middot;</span>
          <a href="mailto:lucas_zheng@brown.edu">lucas_zheng@brown.edu</a>
          <span className="sep">&middot;</span>
          <a href="/cv.pdf">CV</a>
        </p>
        </div>
      </section>

      <section className="block" id="research">
        <h2>Research</h2>
        <div className="body">
          {research.map((item) => (
            <ItemRow
              key={item.meta.slug}
              meta={item.meta}
              href={`/research/${item.meta.slug}/`}
            />
          ))}
        </div>
      </section>

      <section className="block" id="projects">
        <h2>Projects</h2>
        <div className="body">
          {featured.map((item) => (
            <ItemRow
              key={item.meta.slug}
              meta={item.meta}
              href={`/projects/${item.meta.slug}/`}
            />
          ))}
          <Link className="more" href="/projects/">
            All {projects.length} projects
          </Link>
        </div>
      </section>

      <section className="block" id="writing">
        <h2>Writing</h2>
        <div className="body">
          {writing.map((item) => (
            <ItemRow
              key={item.meta.slug}
              meta={item.meta}
              href={`/writing/${item.meta.slug}/`}
            />
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
