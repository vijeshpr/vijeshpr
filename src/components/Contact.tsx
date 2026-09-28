import { Mail, Phone, MapPin } from "lucide-react";
import { useReveal } from "../hooks/useReveal";
import { profile } from "../data/profile";

export default function Contact() {
  const ref = useReveal<HTMLDivElement>();

  const rows = [
    { icon: Phone, label: "Phone", value: profile.contact.phone },
    { icon: Mail, label: "Email", value: profile.contact.email },
    { icon: MapPin, label: "Location", value: profile.location },
  ];

  return (
    <section
      id="contact"
      className="border-b border-line dark:border-night-line bg-ink dark:bg-night-panel text-paper"
    >
      <div
        ref={ref}
        className="reveal max-w-content mx-auto px-6 lg:px-10 py-20 lg:py-28 grid lg:grid-cols-2 gap-14"
      >
        <div>
          <span className="font-mono text-xs tracking-wide text-brass">Let's connect</span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl leading-tight">
            Open to opportunities in RCU, Risk Operations, Loan Verification
            and Banking/NBFC Operations.
          </h2>
          <p className="mt-6 text-paper/70 leading-relaxed max-w-[48ch]">
            If you're hiring for a role along these lines, I'd welcome the
            conversation — reach out using any of the details alongside.
          </p>
        </div>

        <dl className="space-y-6">
          {rows.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-start gap-4 border-b border-paper/15 pb-6">
              <Icon className="w-5 h-5 mt-0.5 text-brass shrink-0" strokeWidth={1.6} />
              <div>
                <dt className="text-xs font-mono text-paper/50">{label}</dt>
                <dd className="mt-1 text-lg">{value}</dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
