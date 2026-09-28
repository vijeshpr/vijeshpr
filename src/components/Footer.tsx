import { profile } from "../data/profile";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink dark:bg-night-panel text-paper/60">
      <div className="max-w-content mx-auto px-6 lg:px-10 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
        <div>
          <span className="text-paper">{profile.name}</span>
          <span className="mx-2">·</span>
          <span>{profile.role}</span>
        </div>
        <p>© {year} {profile.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
