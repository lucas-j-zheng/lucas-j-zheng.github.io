export default function Tag({ label }: { label: string }) {
  return (
    <span className="inline-block rounded-full border border-border px-2.5 py-0.5 font-sans text-xs text-muted">
      {label}
    </span>
  );
}
