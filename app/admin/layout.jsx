// Dashboard-only styles. Next.js scopes CSS imported by a layout to
// that route segment, so this never lands in the stylesheet a visitor
// downloads — it used to sit in globals.css and render-block every
// public page with ~7 KB nobody outside this route needs.
import './admin.css';

// The dashboard is private: keep it out of every index, and out of
// the sitemap. robots.js also disallows /admin.
export const metadata = {
  title: 'Lead dashboard',
  robots: { index: false, follow: false, nocache: true,
    googleBot: { index: false, follow: false } },
};

export default function AdminLayout({ children }) {
  // .admin-shell tells globals.css to hide the public chrome
  // (nav, footer, chat bubble) — this is a tool, not a web page.
  return <div className="admin-shell">{children}</div>;
}
