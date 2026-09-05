// ─────────────────────────────────────────────────────────────
//  THE TEAM
//
//  Lives in its own module because it is rendered on /about/team
//  rather than on /about, and referenced by the Organization schema
//  in the root layout.
//
//  ⚠️  WHY THERE IS A PAGE AT ALL, RATHER THAN HIDDEN MARKUP
//
//  The ask was to take the team off the About page but keep it working
//  for search. Serving content to Googlebot that a visitor cannot see
//  is cloaking — an explicit Google spam policy violation, and one of
//  the few that carries a manual action against the whole domain
//  rather than a ranking adjustment. `display:none` on a block that
//  stays in the HTML for crawlers is the textbook example.
//
//  Publishing Person schema for people who appear nowhere on the page
//  breaks Google's structured-data guidelines the same way: markup has
//  to describe content that is actually visible.
//
//  So the team moved to its own page instead. It is off /about exactly
//  as asked, it is genuinely visible to anyone who opens it, it is
//  linked from the footer and the About page, and it is in the sitemap.
//  It keeps every bit of the search value, with none of the risk — and
//  a dedicated page usually ranks better for name searches than a
//  section buried halfway down /about ever did.
// ─────────────────────────────────────────────────────────────

export const team = [
  {
    initials: 'HT',
    name: 'Hammad Tahir',
    role: 'Founder & CEO',
    colour: '#14123B',
    bio: 'Sets the standard every project is measured against, and still reads every brief that comes in.',
    knows: ['Business automation', 'GoHighLevel', 'Project strategy'],
  },
  {
    initials: 'AR',
    name: 'Ayaan Raza',
    role: 'Automation Lead',
    colour: '#5B4FE9',
    bio: 'Turns manual chaos into workflows that never sleep. Specialises in the follow-up sequences that decide whether a lead becomes a customer.',
    knows: ['GoHighLevel', 'Zapier & Make.com', 'CRM architecture'],
  },
  {
    initials: 'ZM',
    name: 'Zara Malik',
    role: 'Design Director',
    colour: '#04866A',
    bio: 'Guardian of every pixel that leaves the studio. Designs from a blank canvas rather than adapting a theme, and argues for the user when nobody else in the room will.',
    knows: ['UI/UX design', 'Design systems', 'Figma'],
  },
  {
    initials: 'HK',
    name: 'Hamza Khan',
    role: 'Senior WordPress Engineer',
    colour: '#A66747',
    bio: 'Writes the code page builders wish they could. Builds sites that are still maintainable in year five, which is a harder problem than making them look right in week one.',
    knows: ['WordPress development', 'WooCommerce', 'Custom themes & plugins'],
  },
  {
    initials: 'NS',
    name: 'Nadia Shah',
    role: 'E-commerce & UX Strategist',
    colour: '#7C4DFF',
    bio: 'Makes stores people actually enjoy shopping in. Spends more time on checkout than on the homepage, because that is where the money is lost.',
    knows: ['WooCommerce', 'Conversion optimisation', 'UX research'],
  },
];

/** Person schema for the team page — valid because the page shows them. */
export const teamSchema = (siteUrl) =>
  team.map((m) => ({
    '@type': 'Person',
    name: m.name,
    jobTitle: m.role,
    description: m.bio,
    knowsAbout: m.knows,
    worksFor: { '@id': `${siteUrl}/#organization` },
  }));
