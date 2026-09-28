import { useReveal } from "../hooks/useReveal";
import { profile } from "../data/profile";

export default function EducationCertifications() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section
      id="education"
      className="border-b border-line dark:border-night-line bg-white/50 dark:bg-night-panel/40"
    >
      <div ref={ref} className="reveal max-w-content mx-auto px-6 lg:px-10 py-20 lg:py-24">
        <div className="max-w-[52ch]">
          <span className="font-mono text-xs tracking-wide text-ledger dark:text-ledger-light">
            Background
          </span>
          <h2 className="mt-3 font-serif text-3xl text-ink dark:text-paper leading-tight">
            Education &amp; certifications
          </h2>
        </div>

        <div className="mt-12 grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="font-serif text-lg text-ink dark:text-paper border-b border-line dark:border-night-line pb-3">
              Education
            </h3>
            <ul className="mt-5 space-y-6">
              {profile.education.map((ed) => (
                <li key={ed.qualification}>
                  <div className="flex flex-wrap justify-between gap-x-4 gap-y-1">
                    <span className="text-ink dark:text-paper font-medium">
                      {ed.qualification}
                    </span>
                    <span className="font-mono text-xs text-slate dark:text-night-slate">
                      {ed.period}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-slate dark:text-night-slate">
                    {ed.institution}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div id="certifications">
            <h3 className="font-serif text-lg text-ink dark:text-paper border-b border-line dark:border-night-line pb-3">
              Certifications
            </h3>
            <ul className="mt-5 space-y-6">
              {profile.certifications.map((cert) => (
                <li key={cert.name}>
                  <span className="text-ink dark:text-paper font-medium">{cert.name}</span>
                  <p className="mt-1 text-sm text-slate dark:text-night-slate">{cert.issuer}</p>
                  {cert.note && (
                    <p className="mt-1 text-xs text-ledger dark:text-ledger-light">
                      {cert.note}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
