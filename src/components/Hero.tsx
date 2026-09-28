import { ArrowDownToLine, MapPin } from "lucide-react";
import { profile } from "../data/profile";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-[76px] ledger-lines border-b border-line dark:border-night-line overflow-hidden"
    >
      <div className="max-w-content mx-auto px-6 lg:px-10 py-20 lg:py-28 grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
        {/* Copy */}
        <div>
          <p
            className="hero-in flex items-center gap-2 text-sm text-slate dark:text-night-slate mb-6"
            style={{ animationDelay: "0.05s" }}
          >
            <MapPin className="w-4 h-4" strokeWidth={1.75} aria-hidden="true" />
            {profile.location}
          </p>

          <h1
            className="hero-in font-serif text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08] text-ink dark:text-paper"
            style={{ animationDelay: "0.12s" }}
          >
            {profile.name}
          </h1>
          <p
            className="hero-in mt-3 font-serif text-xl sm:text-2xl text-ledger dark:text-ledger-light"
            style={{ animationDelay: "0.2s" }}
          >
            {profile.role}
          </p>

          <p
            className="hero-in mt-7 text-slate dark:text-night-slate text-base sm:text-lg leading-relaxed max-w-[46ch]"
            style={{ animationDelay: "0.28s" }}
          >
            {profile.heroSummary}
          </p>

          <div
            className="hero-in mt-10 flex flex-wrap items-center gap-4"
            style={{ animationDelay: "0.36s" }}
          >
            <a
              href="#experience"
              className="inline-flex items-center rounded-sm bg-ink dark:bg-paper px-6 py-3.5 text-sm font-medium text-paper dark:text-ink hover:bg-ledger-dark dark:hover:bg-ledger-light transition-colors"
            >
              View Experience
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-sm border border-ink/25 dark:border-paper/25 px-6 py-3.5 text-sm font-medium text-ink dark:text-paper hover:border-ink dark:hover:border-paper transition-colors"
            >
              Contact Me
            </a>
          </div>

          <a
            href={profile.resumeUrl}
            download="Vijesh-PR-Resume.pdf"
            className="hero-in mt-6 inline-flex items-center gap-2 text-sm text-slate dark:text-night-slate hover:text-ink dark:hover:text-paper transition-colors"
            style={{ animationDelay: "0.44s" }}
          >
            <ArrowDownToLine className="w-4 h-4" strokeWidth={1.75} />
            Download full resume (PDF)
          </a>
        </div>

        {/* Visual: portrait framed like a verified field case-file */}
        <div
          className="hero-in relative mx-auto lg:mx-0 lg:justify-self-center w-full max-w-[250px]"
          style={{ animationDelay: "0.22s" }}
        >
          {/* Offset frame line behind the photo for depth */}
          <div
            className="absolute -top-4 -left-4 w-full h-full rounded-md border border-brass/60 hidden sm:block"
            aria-hidden="true"
          />

          <div className="relative rounded-md border border-line dark:border-night-line bg-white dark:bg-night-panel shadow-card overflow-hidden">
            <div className="flex items-center justify-between border-b border-line dark:border-night-line px-4 py-2.5">
              <span className="font-mono text-[0.65rem] tracking-wide text-slate dark:text-night-slate">
                CASE FILE / RCU-2091
              </span>
              <span className="font-mono text-[0.65rem] text-slate dark:text-night-slate">
                FIELD REPORT
              </span>
            </div>

            <img
              src={profile.photo}
              alt={`${profile.name}, ${profile.role}`}
              className="w-full aspect-square object-cover object-top"
              width={250}
              height={250}
            />

            <div className="px-4 py-2.5 flex items-center justify-between">
              <span className="font-mono text-[0.65rem] text-slate dark:text-night-slate">
                Filed by V.P.R.
              </span>
              <span className="font-mono text-[0.65rem] text-slate dark:text-night-slate">
                {profile.location}
              </span>
            </div>
          </div>

          {/* Stamp */}
          <div className="absolute -bottom-5 -right-4 sm:-right-7 w-20 h-20 rounded-full border-2 border-brass flex items-center justify-center bg-paper dark:bg-night rotate-[-10deg] shadow-card">
            <span className="font-serif text-[0.6rem] tracking-[0.12em] text-brass text-center leading-tight">
              FIELD
              <br />
              VERIFIED
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
