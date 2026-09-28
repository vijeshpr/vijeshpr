import { useEffect, useState } from "react";
import { Menu, X, ShieldCheck, Sun, Moon } from "lucide-react";
import { profile } from "../data/profile";
import { useTheme } from "../hooks/useTheme";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const ThemeToggle = ({ className = "" }: { className?: string }) => (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className={`inline-flex items-center justify-center w-10 h-10 rounded-sm border border-ink/15 dark:border-paper/20 text-ink dark:text-paper hover:border-ledger dark:hover:border-ledger-light transition-colors ${className}`}
    >
      {theme === "dark" ? (
        <Sun className="w-[18px] h-[18px]" strokeWidth={1.75} />
      ) : (
        <Moon className="w-[18px] h-[18px]" strokeWidth={1.75} />
      )}
    </button>
  );

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-paper/95 dark:bg-night/95 backdrop-blur border-b border-line dark:border-night-line"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-content mx-auto px-6 lg:px-10 h-[76px] flex items-center justify-between">
        <a
          href="#home"
          className="flex items-center gap-2.5 font-serif text-lg font-semibold text-ink dark:text-paper"
        >
          <ShieldCheck
            className="w-5 h-5 text-ledger dark:text-ledger-light"
            strokeWidth={1.75}
            aria-hidden="true"
          />
          <span>Vijesh PR</span>
        </a>

        <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
          {profile.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[0.9rem] text-slate dark:text-night-slate hover:text-ink dark:hover:text-paper transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle />
          <a
            href={profile.resumeUrl}
            download="Vijesh-PR-Resume.pdf"
            className="inline-flex items-center rounded-sm bg-ink dark:bg-paper px-5 py-2.5 text-sm font-medium text-paper dark:text-ink hover:bg-ledger-dark dark:hover:bg-ledger-light transition-colors"
          >
            Download Resume
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="p-2 text-ink dark:text-paper"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-line dark:border-night-line bg-paper dark:bg-night px-6 pb-6 pt-2">
          <nav className="flex flex-col" aria-label="Mobile">
            {profile.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 border-b border-line/70 dark:border-night-line text-ink dark:text-paper text-[0.95rem]"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href={profile.resumeUrl}
            download="Vijesh-PR-Resume.pdf"
            className="mt-5 inline-flex w-full items-center justify-center rounded-sm bg-ink dark:bg-paper px-5 py-3 text-sm font-medium text-paper dark:text-ink"
          >
            Download Resume
          </a>
        </div>
      )}
    </header>
  );
}
