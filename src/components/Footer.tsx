export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-6 text-xs uppercase tracking-widest text-muted">
        <span>Lucas Zheng</span>
        <div className="flex gap-5">
          <a
            href="https://github.com/lucas-j-zheng"
            className="transition-colors hover:text-pink"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/lucas-j-zheng"
            className="transition-colors hover:text-pink"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="mailto:lucas_zheng@brown.edu"
            className="transition-colors hover:text-pink"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
