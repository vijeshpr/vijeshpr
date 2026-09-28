import { ShieldCheck, Landmark, BarChart3, Users, type LucideIcon } from "lucide-react";
import { useReveal } from "../hooks/useReveal";
import { profile } from "../data/profile";

const ICONS: Record<string, LucideIcon> = {
  rcu: ShieldCheck,
  banking: Landmark,
  tech: BarChart3,
  leadership: Users,
};

export default function Expertise() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="expertise" className="border-b border-line dark:border-night-line bg-white/50 dark:bg-night-panel/40">
      <div ref={ref} className="reveal max-w-content mx-auto px-6 lg:px-10 py-20 lg:py-24">
        <div className="max-w-[52ch]">
          <span className="font-mono text-xs tracking-wide text-ledger dark:text-ledger-light">
            Expertise
          </span>
          <h2 className="mt-3 font-serif text-3xl text-ink dark:text-paper leading-tight">
            Core expertise across verification and financial operations
          </h2>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line dark:bg-night-line border border-line dark:border-night-line">
          {profile.expertise.categories.map((cat) => {
            const Icon = ICONS[cat.key];
            return (
              <div key={cat.key} className="bg-paper dark:bg-night p-7">
                <Icon
                  className="w-5 h-5 text-ledger dark:text-ledger-light"
                  strokeWidth={1.6}
                  aria-hidden="true"
                />
                <h3 className="mt-4 font-serif text-lg text-ink dark:text-paper">
                  {cat.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-slate dark:text-night-slate"
                    >
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-brass shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
