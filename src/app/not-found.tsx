import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 antialiased font-mono bg-background text-foreground">
      <div className="max-w-md w-full border border-border/80 rounded-2xl bg-surface p-8 text-center space-y-6 shadow-2xl">
        <div className="inline-block px-3 py-1 rounded-full border border-accent/30 bg-accent-dim text-xs text-accent">
          ERROR 404 · PAGE NOT FOUND
        </div>
        <div className="space-y-2">
          <h1 className="text-3xl font-extrabold tracking-tight">
            الصفحة غير موجودة
          </h1>
          <p className="text-sm text-muted">
            The requested address could not be located in this digital space.
          </p>
        </div>
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/ar"
            className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-accent text-accent-foreground font-semibold text-xs transition-opacity hover:opacity-90"
          >
            الرئيسية (العربية)
          </Link>
          <Link
            href="/en"
            className="w-full sm:w-auto px-5 py-2.5 rounded-full border border-border bg-surface-hover text-foreground font-medium text-xs hover:bg-surface-elevated transition-colors"
          >
            Home (English)
          </Link>
        </div>
      </div>
    </div>
  );
}
