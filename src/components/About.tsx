import { useReveal } from "../hooks/useReveal";
import { profile } from "../data/profile";

export default function About() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="border-b border-line dark:border-night-line">
      <div
        ref={ref}
        className="reveal max-w-content mx-auto px-6 lg:px-10 py-20 lg:py-24 grid lg:grid-cols-[0.7fr_1.3fr] gap-12"
      >
        <div>
          <span className="font-mono text-xs tracking-wide text-ledger dark:text-ledger-light">
            About
          </span>
          <h2 className="mt-3 font-serif text-3xl text-ink dark:text-paper leading-tight">
            {profile.about.heading}
          </h2>
        </div>

        <div className="space-y-5 max-w-[68ch]">
          {profile.about.paragraphs.map((para, i) => (
            <p key={i} className="text-slate dark:text-night-slate leading-relaxed">
              {para}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
