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
