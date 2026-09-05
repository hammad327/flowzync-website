// ─────────────────────────────────────────────────────────────
//  LANGUAGE LANDING PAGES
//
//  ⚠️  READ THIS BEFORE ADDING A LANGUAGE
//
//  This is deliberately NOT a full translation of all 126 pages, and
//  that is the important decision in this file.
//
//  Machine-translating an entire site is one of the reliable ways to
//  damage it. Google treats bulk auto-translated pages as spam under
//  its scaled content abuse policy; a Spanish prospect who reads
//  three sentences of awkward Spanish trusts you less than if the
//  page had been in English; and every one of those pages then has to
//  be maintained forever, in a language nobody in the business reads.
//
//  What actually works, and what this is: ONE genuinely written
//  landing page per language, covering who we are, what we do and how
//  to make contact, correctly cross-linked with hreflang. It gives a
//  non-English searcher a real page to land on and gives Google a
//  legitimate signal for that language, without pretending to be a
//  localised business.
//
//  ── BEFORE YOU PUBLISH A NEW LANGUAGE ──────────────────────
//  Have a native speaker read it. These were written carefully, not
//  machine-translated, but "written carefully by someone who is not a
//  native speaker" is still not the same as "correct". A translator
//  reviewing one page costs very little and is worth it, because the
//  page is representing your business.
//
//  ── AND BEFORE YOU TRANSLATE THE WHOLE SITE ────────────────
//  Don't, unless you are prepared to have every page professionally
//  translated AND kept up to date. A half-maintained translation is
//  worse than none: it goes stale, contradicts the English, and reads
//  as neglect to exactly the customers you were trying to reach.
// ─────────────────────────────────────────────────────────────

export const DEFAULT_LOCALE = 'en';

export const locales = [
  {
    code: 'es',
    hreflang: 'es',
    name: 'Español',
    englishName: 'Spanish',
    dir: 'ltr',
    title: 'Diseño Web y Automatización para Empresas | Flowzync',
    description:
      'Flowzync diseña sitios web a medida, embudos de venta y automatización para empresas de todo el mundo. Presupuestos cerrados, equipo senior, SEO incluido desde el primer día.',
    heading: 'Sitios web que trabajan mientras usted duerme',
    lede:
      'Somos un estudio remoto que diseña y desarrolla sitios web a medida, páginas de aterrizaje, embudos de GoHighLevel, tiendas WooCommerce y automatización de procesos. Trabajamos con clientes en todo el mundo.',
    sections: [
      ['Qué hacemos', 'Diseño web a medida, páginas de aterrizaje, embudos y configuración de CRM en GoHighLevel, desarrollo en WordPress y WooCommerce, automatización de procesos, SEO técnico y de contenidos, diseño UI/UX y mantenimiento continuo. Cada servicio es un proyecto completo: estrategia, diseño, desarrollo y soporte.'],
      ['Cómo trabajamos', 'Presupuesto cerrado y detallado antes de empezar. Sin facturación por horas y sin sorpresas. Usted trabaja directamente con las personas que construyen el proyecto, no con un gestor de cuentas que traslada mensajes.'],
      ['Dónde trabajamos', 'Somos un estudio remoto. Trabajamos con clientes en España, Latinoamérica, Estados Unidos, Reino Unido y el resto del mundo, adaptando las reuniones a su horario y emitiendo presupuestos en su moneda.'],
    ],
    faqs: [
      ['¿Trabajan con clientes de habla hispana?', 'Sí. Trabajamos con clientes en España, México, Colombia, Argentina y Estados Unidos. Las reuniones se programan en su horario y los presupuestos pueden emitirse en su moneda. El trabajo y la documentación pueden entregarse en español o en inglés, según prefiera.'],
      ['¿Cuánto cuesta un sitio web?', 'Cada proyecto se presupuesta de forma individual según su alcance. El presupuesto es cerrado y detallado antes de comenzar el trabajo: no facturamos por horas y no hay cargos añadidos por cambiar de opinión sobre un titular.'],
      ['¿El sitio estará optimizado para Google?', 'Sí. La estructura, los datos estructurados y la velocidad forman parte del desarrollo desde el principio, no de una revisión posterior. No garantizamos posiciones concretas en Google: nadie puede hacerlo honestamente.'],
    ],
    extra: ['Por qué un estudio remoto', 'No tenemos oficina que visitar, y lo decimos abiertamente en lugar de insinuar una presencia local que usted acabaría descubriendo. Es también la razón honesta por la que nuestros presupuestos se comparan bien con los de una agencia local: no hay alquiler, ni gestores de cuentas, ni equipo comercial dentro del precio. Las revisiones de diseño, las correcciones y la entrega final ocurren en línea, exactamente igual que con un estudio de su ciudad.'],
    servicesLabel: 'Servicios',
    services: ['Diseño web a medida', 'Páginas de aterrizaje', 'Embudos GoHighLevel', 'Configuración de CRM', 'Automatización de procesos', 'WordPress y Elementor', 'Tiendas WooCommerce', 'SEO técnico y de contenidos', 'Diseño UI/UX', 'Diseño gráfico', 'Mantenimiento y soporte'],
    cta: 'Solicitar presupuesto',
    ctaNote: 'Cuéntenos qué necesita y le responderemos con un presupuesto cerrado.',
    contactLead: 'Escríbanos a',
    backToEnglish: 'View this site in English',
  },
  {
    code: 'fr',
    hreflang: 'fr',
    name: 'Français',
    englishName: 'French',
    dir: 'ltr',
    title: 'Création de Sites Web et Automatisation | Flowzync',
    description:
      'Flowzync conçoit des sites web sur mesure, des tunnels de vente et de l’automatisation pour des entreprises du monde entier. Devis fixes, équipe senior, SEO intégré dès le départ.',
    heading: 'Des sites web qui travaillent pendant que vous dormez',
    lede:
      'Nous sommes un studio à distance qui conçoit et développe des sites web sur mesure, des pages d’atterrissage, des tunnels GoHighLevel, des boutiques WooCommerce et de l’automatisation. Nous travaillons avec des clients partout dans le monde.',
    sections: [
      ['Ce que nous faisons', 'Création de sites sur mesure, pages d’atterrissage, tunnels de vente et configuration CRM sur GoHighLevel, développement WordPress et WooCommerce, automatisation des processus, référencement technique et éditorial, design UI/UX et maintenance. Chaque service est un accompagnement complet : stratégie, design, développement et support.'],
      ['Notre façon de travailler', 'Un devis fixe et détaillé avant le démarrage. Pas de facturation à l’heure et aucune mauvaise surprise. Vous échangez directement avec les personnes qui réalisent le projet, sans intermédiaire.'],
      ['Où nous intervenons', 'Nous sommes un studio à distance. Nous travaillons avec des clients en France, en Belgique, en Suisse, au Canada, au Royaume-Uni et ailleurs, avec des réunions programmées à vos horaires et des devis dans votre devise.'],
    ],
    faqs: [
      ['Travaillez-vous avec des clients francophones ?', 'Oui. Nous travaillons avec des clients en France, en Belgique, en Suisse et au Québec. Les réunions sont programmées à vos horaires et les devis peuvent être établis dans votre devise. Les livrables et la documentation peuvent être fournis en français ou en anglais.'],
      ['Combien coûte un site web ?', 'Chaque projet est chiffré individuellement selon son périmètre. Le devis est fixe et détaillé avant le début des travaux : pas de facturation horaire, et aucun supplément parce que vous changez d’avis sur un titre.'],
      ['Le site sera-t-il optimisé pour Google ?', 'Oui. La structure, les données structurées et la performance font partie du développement dès le départ, et non d’une reprise ultérieure. Nous ne garantissons aucune position précise dans Google : personne ne peut le faire honnêtement.'],
    ],
    extra: ['Pourquoi un studio à distance', 'Nous n’avons pas de bureau à visiter, et nous le disons franchement plutôt que de laisser croire à une présence locale que vous finiriez par découvrir. C’est aussi la raison honnête pour laquelle nos devis se comparent avantageusement à ceux d’une agence locale : ni loyer, ni chargé de clientèle, ni équipe commerciale dans le prix. Les revues de design, les corrections et la livraison se font en ligne, exactement comme avec un studio de votre ville.'],
    servicesLabel: 'Nos services',
    services: ['Création de sites sur mesure', 'Pages d’atterrissage', 'Tunnels GoHighLevel', 'Configuration CRM', 'Automatisation des processus', 'WordPress et Elementor', 'Boutiques WooCommerce', 'Référencement technique et éditorial', 'Design UI/UX', 'Design graphique', 'Maintenance et support'],
    cta: 'Demander un devis',
    ctaNote: 'Dites-nous ce dont vous avez besoin et nous reviendrons vers vous avec un devis fixe.',
    contactLead: 'Écrivez-nous à',
    backToEnglish: 'View this site in English',
  },
  {
    code: 'de',
    hreflang: 'de',
    name: 'Deutsch',
    englishName: 'German',
    dir: 'ltr',
    title: 'Webdesign und Automatisierung für Unternehmen | Flowzync',
    description:
      'Flowzync entwickelt individuelle Websites, Verkaufstrichter und Automatisierung für Unternehmen weltweit. Festpreise, erfahrenes Team, SEO von Anfang an mitgedacht.',
    heading: 'Websites, die arbeiten, während Sie schlafen',
    lede:
      'Wir sind ein Remote-Studio und entwickeln individuelle Websites, Landingpages, GoHighLevel-Funnels, WooCommerce-Shops und Prozessautomatisierung. Wir arbeiten mit Kunden weltweit.',
    sections: [
      ['Was wir machen', 'Individuelles Webdesign, Landingpages, Funnels und CRM-Einrichtung in GoHighLevel, WordPress- und WooCommerce-Entwicklung, Prozessautomatisierung, technisches und inhaltliches SEO, UI/UX-Design sowie laufende Wartung. Jede Leistung ist ein vollständiges Projekt: Strategie, Design, Umsetzung und Support.'],
      ['Wie wir arbeiten', 'Ein fester, aufgeschlüsselter Kostenvoranschlag vor Projektbeginn. Keine Stundenabrechnung und keine Überraschungen. Sie sprechen direkt mit den Personen, die Ihr Projekt umsetzen — ohne Account Manager dazwischen.'],
      ['Wo wir arbeiten', 'Wir sind ein Remote-Studio und arbeiten mit Kunden in Deutschland, Österreich, der Schweiz, Großbritannien und weltweit. Termine richten sich nach Ihrer Zeitzone, Angebote können in Ihrer Währung erstellt werden.'],
    ],
    faqs: [
      ['Arbeiten Sie mit deutschsprachigen Kunden?', 'Ja. Wir arbeiten mit Kunden in Deutschland, Österreich und der Schweiz. Termine werden nach Ihrer Zeitzone geplant und Angebote können in Euro oder Schweizer Franken erstellt werden. Projektunterlagen liefern wir auf Deutsch oder Englisch.'],
      ['Was kostet eine Website?', 'Jedes Projekt wird einzeln nach Umfang kalkuliert. Der Kostenvoranschlag ist vor Projektbeginn fest und aufgeschlüsselt: keine Stundenabrechnung und keine Zusatzkosten, wenn Sie eine Überschrift ändern möchten.'],
      ['Ist die Website für Google optimiert?', 'Ja. Struktur, strukturierte Daten und Ladegeschwindigkeit sind von Beginn an Teil der Entwicklung und nicht eine spätere Nachbesserung. Konkrete Google-Platzierungen garantieren wir nicht — das kann seriös niemand.'],
    ],
    extra: ['Warum ein Remote-Studio', 'Es gibt kein Büro zu besuchen, und wir sagen das offen, statt eine lokale Präsenz anzudeuten, die Sie ohnehin irgendwann bemerken würden. Es ist auch der ehrliche Grund, warum unsere Angebote im Vergleich zu einer lokalen Agentur gut abschneiden: keine Miete, keine Account Manager und kein Vertriebsteam im Preis. Design-Abnahmen, Korrekturen und die Übergabe laufen online ab — genau wie bei einem Studio in Ihrer Stadt.'],
    servicesLabel: 'Leistungen',
    services: ['Individuelles Webdesign', 'Landingpages', 'GoHighLevel-Funnels', 'CRM-Einrichtung', 'Prozessautomatisierung', 'WordPress und Elementor', 'WooCommerce-Shops', 'Technisches und inhaltliches SEO', 'UI/UX-Design', 'Grafikdesign', 'Wartung und Support'],
    cta: 'Angebot anfordern',
    ctaNote: 'Sagen Sie uns, was Sie brauchen — Sie erhalten ein verbindliches Festpreisangebot.',
    contactLead: 'Schreiben Sie uns an',
    backToEnglish: 'View this site in English',
  },
  {
    code: 'ar',
    hreflang: 'ar',
    name: 'العربية',
    englishName: 'Arabic',
    dir: 'rtl',
    title: 'تصميم مواقع وأتمتة الأعمال | Flowzync',
    description:
      'تصمم Flowzync مواقع إلكترونية مخصصة وقمع مبيعات وأنظمة أتمتة للشركات حول العالم. عروض أسعار ثابتة، فريق متخصص، وتحسين لمحركات البحث منذ البداية.',
    heading: 'مواقع إلكترونية تعمل بينما تنام',
    lede:
      'نحن استوديو يعمل عن بُعد في تصميم وتطوير المواقع الإلكترونية المخصصة وصفحات الهبوط وقمع GoHighLevel ومتاجر WooCommerce وأنظمة الأتمتة. نعمل مع عملاء في مختلف أنحاء العالم.',
    sections: [
      ['ما الذي نقدمه', 'تصميم مواقع مخصصة، صفحات هبوط، بناء قمع المبيعات وإعداد أنظمة إدارة العملاء على GoHighLevel، تطوير WordPress وWooCommerce، أتمتة العمليات، تحسين محركات البحث تقنيًا ومحتوىً، تصميم واجهات المستخدم، والصيانة المستمرة. كل خدمة مشروع متكامل: الاستراتيجية والتصميم والتنفيذ والدعم.'],
      ['كيف نعمل', 'عرض سعر ثابت ومفصل قبل بدء العمل. لا فوترة بالساعة ولا مفاجآت. تتعامل مباشرة مع الأشخاص الذين ينفذون مشروعك، دون وسيط.'],
      ['أين نعمل', 'نحن استوديو يعمل عن بُعد. نعمل مع عملاء في الإمارات والسعودية وقطر والكويت والبحرين وعُمان وحول العالم، مع تحديد المكالمات وفق توقيتكم وإصدار عروض الأسعار بعملتكم.'],
    ],
    faqs: [
      ['هل تعملون مع عملاء في الخليج والدول العربية؟', 'نعم. نعمل مع عملاء في الإمارات والسعودية وقطر والكويت والبحرين وعُمان. تُحدَّد المكالمات وفق التوقيت المحلي لديكم، ويمكن إصدار عروض الأسعار بالدرهم أو الريال أو أي عملة أخرى.'],
      ['هل يمكنكم بناء موقع بالعربية والإنجليزية؟', 'نعم. نبني النسخة العربية كواجهة كاملة من اليمين إلى اليسار، وليست مجرد نص مترجم داخل تصميم مصمم للإنجليزية: تنعكس بنية الصفحة والتنقل، وتُختار الخطوط العربية بعناية، ويحصل كل إصدار لغوي على رابط مستقل مع وسوم hreflang. نعمل مع كاتب أو مترجم عربي من طرفكم؛ لا نستخدم الترجمة الآلية للمحتوى المنشور.'],
      ['كم تكلفة الموقع الإلكتروني؟', 'يُسعَّر كل مشروع على حدة حسب نطاقه. عرض السعر ثابت ومفصل قبل بدء العمل: لا فوترة بالساعة ولا رسوم إضافية عند تعديل عنوان أو فقرة.'],
    ],
    extra: ['لماذا استوديو يعمل عن بُعد', 'لا يوجد مكتب لزيارته، ونقول ذلك بوضوح بدلًا من الإيحاء بوجود محلي ستكتشفون خلافه لاحقًا. وهذا أيضًا السبب الصريح في أن عروض أسعارنا تنافس وكالة محلية: لا إيجار ولا مديري حسابات ولا فريق مبيعات داخل السعر. تتم مراجعات التصميم والتعديلات والتسليم النهائي عبر الإنترنت، تمامًا كما هو الحال مع أي استوديو في مدينتكم.'],
    servicesLabel: 'خدماتنا',
    services: ['تصميم مواقع مخصصة', 'صفحات هبوط', 'قمع GoHighLevel', 'إعداد أنظمة إدارة العملاء', 'أتمتة العمليات', 'WordPress وElementor', 'متاجر WooCommerce', 'تحسين محركات البحث', 'تصميم واجهات المستخدم', 'التصميم الجرافيكي', 'الصيانة والدعم'],
    cta: 'اطلب عرض سعر',
    ctaNote: 'أخبرنا بما تحتاجه وسنعود إليك بعرض سعر ثابت ومفصل.',
    contactLead: 'راسلنا على',
    backToEnglish: 'View this site in English',
  },
];

export const getLocale = (code) => locales.find((l) => l.code === code);
export const localeCodes = locales.map((l) => l.code);

/**
 * hreflang set for a page.
 *
 * Every version must list every version INCLUDING itself, or Google
 * ignores the whole cluster — a self-referencing tag is not optional.
 * x-default points at English as the fallback for anyone whose
 * language we do not publish.
 */
export function hreflangFor(siteUrl, currentPath = '/') {
  const languages = { 'x-default': `${siteUrl}${currentPath === '/' ? '' : currentPath}` };
  languages.en = `${siteUrl}${currentPath === '/' ? '' : currentPath}`;
  for (const l of locales) languages[l.hreflang] = `${siteUrl}/${l.code}`;
  return languages;
}
