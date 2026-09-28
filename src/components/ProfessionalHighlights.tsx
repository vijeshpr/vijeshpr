import { useReveal } from "../hooks/useReveal";
import { profile } from "../data/profile";

export default function ProfessionalHighlights() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="border-b border-line dark:border-night-line bg-white/50 dark:bg-night-panel/40">
      <div
        ref={ref}
        className="reveal max-w-content mx-auto px-6 lg:px-10 py-14 grid grid-cols-2 md:grid-cols-4 gap-6"
      >
        {profile.highlights.map((stat) => (
          <div
            key={stat.label}
            className="border-l border-line dark:border-night-line pl-5 py-1"
          >
            <div className="font-serif text-3xl sm:text-4xl text-ink dark:text-paper">
              {stat.value}
            </div>
            <div className="mt-1.5 text-sm text-slate dark:text-night-slate leading-snug">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
