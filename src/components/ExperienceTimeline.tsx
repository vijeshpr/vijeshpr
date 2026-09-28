import { useReveal } from "../hooks/useReveal";
import { profile } from "../data/profile";

export default function ExperienceTimeline() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="experience" className="border-b border-line dark:border-night-line">
      <div ref={ref} className="reveal max-w-content mx-auto px-6 lg:px-10 py-20 lg:py-24">
        <div className="max-w-[52ch]">
          <span className="font-mono text-xs tracking-wide text-ledger dark:text-ledger-light">
            Experience
          </span>
          <h2 className="mt-3 font-serif text-3xl text-ink dark:text-paper leading-tight">
            Professional experience
          </h2>
        </div>

        <div className="mt-14 relative">
          <div
            className="absolute left-[7px] top-2 bottom-2 w-px bg-line dark:bg-night-line hidden sm:block"
            aria-hidden="true"
          />

          <div className="space-y-10">
            {profile.experience.map((job) => (
              <div key={job.company + job.title} className="relative sm:pl-12">
                <span
                  className={`hidden sm:block absolute left-0 top-2 w-3.5 h-3.5 rounded-full border-2 ${
                    job.featured
                      ? "bg-ledger border-ledger dark:bg-ledger-light dark:border-ledger-light"
                      : "bg-paper dark:bg-night border-line dark:border-night-line"
                  }`}
                  aria-hidden="true"
                />

                <div
                  className={`rounded-md border p-6 sm:p-8 ${
                    job.featured
                      ? "border-ledger/40 dark:border-ledger-light/40 bg-white dark:bg-night-panel shadow-card"
                      : "border-line dark:border-night-line bg-white/60 dark:bg-night-panel/50"
                  }`}
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                    <h3 className="font-serif text-xl text-ink dark:text-paper">
                      {job.company}
                    </h3>
                    <span className="font-mono text-xs text-slate dark:text-night-slate">
                      {job.period}
                      {job.duration ? `  ·  ${job.duration}` : ""}
                    </span>
                  </div>
                  <p className="mt-1 text-ledger dark:text-ledger-light text-[0.95rem]">
                    {job.title}
                  </p>

                  {job.dateNote && (
                    <p className="mt-2 text-xs text-slate dark:text-night-slate italic">
                      {job.dateNote}
                    </p>
                  )}

                  <ul className="mt-5 space-y-2">
                    {job.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex gap-3 text-sm text-slate dark:text-night-slate leading-relaxed"
                      >
                        <span className="mt-2 w-1 h-1 rounded-full bg-line dark:bg-night-line shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-ink/80 dark:text-paper/80 border border-line dark:border-night-line rounded-sm px-2.5 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
