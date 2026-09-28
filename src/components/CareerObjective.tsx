import { useReveal } from "../hooks/useReveal";
import { profile } from "../data/profile";

export default function CareerObjective() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="border-b border-line dark:border-night-line">
      <div
        ref={ref}
        className="reveal max-w-content mx-auto px-6 lg:px-10 py-20 lg:py-24 text-center"
      >
        <span className="font-mono text-xs tracking-wide text-ledger dark:text-ledger-light">
          Career objective
        </span>
        <p className="mt-4 mx-auto max-w-[62ch] font-serif text-2xl sm:text-3xl text-ink dark:text-paper leading-snug">
          {profile.careerObjective}
        </p>
      </div>
    </section>
  );
}
