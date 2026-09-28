import { useReveal } from "../hooks/useReveal";
import { profile } from "../data/profile";

export default function RCUExperience() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section
      id="rcu-experience"
      className="border-b border-line dark:border-night-line bg-ink dark:bg-night-panel text-paper"
    >
      <div ref={ref} className="reveal max-w-content mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <div className="max-w-[56ch]">
          <span className="font-mono text-xs tracking-wide text-brass">Featured</span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl leading-tight">
            RCU & field verification experience
          </h2>
          <p className="mt-5 text-paper/70 leading-relaxed">
            Across five years at JRSCA Consulting &amp; Advisory, every case followed the
            same disciplined sequence — from the first visit to the client's premises
            through to a completed, discrepancy-checked verification report.
          </p>
        </div>

        <ol className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
          {profile.rcuProcess.map((step, i) => (
            <li key={step.title} className="border-t border-paper/20 pt-5">
              <span className="font-mono text-xs text-brass">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 font-serif text-lg">{step.title}</h3>
              <p className="mt-2 text-sm text-paper/65 leading-relaxed">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
