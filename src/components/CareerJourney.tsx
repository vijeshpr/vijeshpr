import { useReveal } from "../hooks/useReveal";
import { profile } from "../data/profile";

export default function CareerJourney() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="border-b border-line dark:border-night-line">
      <div ref={ref} className="reveal max-w-content mx-auto px-6 lg:px-10 py-20 lg:py-24">
        <div className="max-w-[52ch]">
          <span className="font-mono text-xs tracking-wide text-ledger dark:text-ledger-light">
            Career journey
          </span>
          <h2 className="mt-3 font-serif text-3xl text-ink dark:text-paper leading-tight">
            Sixteen years across banking and NBFC operations
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {profile.careerJourney.map((stop) => (
            <div
              key={stop.year + stop.company}
              className="border-t-2 border-ink dark:border-paper pt-4"
            >
              <span className="font-mono text-sm text-brass">{stop.year}</span>
              <h3 className="mt-2 font-serif text-lg text-ink dark:text-paper leading-snug">
                {stop.company}
              </h3>
              <p className="mt-1 text-sm text-slate dark:text-night-slate">{stop.title}</p>
              {stop.note && (
                <p className="mt-2 text-xs text-ledger dark:text-ledger-light">{stop.note}</p>
              )}
            </div>
          ))}

          <div className="border-t-2 border-line dark:border-night-line pt-4">
            <span className="font-mono text-sm text-slate dark:text-night-slate">—</span>
            <h3 className="mt-2 font-serif text-lg text-ink dark:text-paper leading-snug">
              {profile.careerJourneyUnplaced.company}
            </h3>
            <p className="mt-1 text-sm text-slate dark:text-night-slate">
              {profile.careerJourneyUnplaced.title}
            </p>
            <p className="mt-2 text-xs text-slate dark:text-night-slate italic">
              {profile.careerJourneyUnplaced.note}
            </p>
          </div>
        </div>

        <p className="mt-10 text-xs text-slate dark:text-night-slate leading-relaxed max-w-[70ch] border-l-2 border-line dark:border-night-line pl-4">
          {profile.careerJourneyNote}
        </p>
      </div>
    </section>
  );
}
