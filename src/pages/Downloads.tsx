import { Link } from "react-router-dom";
import { Download, ArrowLeft, Sparkles } from "lucide-react";
import { Logo } from "@/components/Logo";

export default function Downloads() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <header className="sticky top-0 z-50 bg-background/85 backdrop-blur-lg border-b border-border">
        <div className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl gradient-primary flex items-center justify-center shadow-soft">
              <Sparkles className="w-6 h-6 text-primary-foreground" />
            </div>
            <Logo />
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-foreground/75 hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
        </div>
      </header>

      <section className="flex-1 flex items-center justify-center px-6 py-24">
        <div className="max-w-2xl text-center">
          <div className="mx-auto w-20 h-20 rounded-2xl gradient-primary flex items-center justify-center shadow-elegant mb-8">
            <Download className="w-10 h-10 text-primary-foreground" />
          </div>
          <div className="text-primary text-sm font-bold tracking-[0.2em] uppercase">
            Downloads
          </div>
          <h1 className="mt-3 text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1]">
            Coming Soon
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Our downloads section is being prepared. Soon you'll be able to access brochures,
            program guides, worksheets and school partnership resources right here.
          </p>
          <Link
            to="/"
            className="mt-10 inline-flex items-center gap-2 rounded-full gradient-primary text-primary-foreground px-6 py-3 text-sm font-semibold shadow-elegant hover:-translate-y-0.5 transition-all"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
        </div>
      </section>

      <footer className="bg-[oklch(0.20_0.06_245)] text-white py-6 text-center text-xs text-white/60">
        © 2026 I-SCRAM. All rights reserved.
      </footer>
    </main>
  );
}
