import { Marked } from 'marked';
const esc = s => String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
const safe = u => /^(https?:\/\/|mailto:|tel:|\/(?!\/)|#)/i.test(String(u || ''));
export function markdownHtml(content) {
  const md = new Marked({
    renderer: {
      html: raw => esc(raw),
      link(href, title, text) {
        return safe(href) ? `<a href="${esc(href)}"${title ? ` title="${esc(title)}"` : ''}>${text}</a>` : text;
      },
      image(href, title, text) {
        return safe(href) && !/^mailto:|^tel:/i.test(href) ? `<img src="${esc(href)}" alt="${esc(text)}" loading="lazy"${title ? ` title="${esc(title)}"` : ''}>` : esc(text);
      }
    }
  });
  return md.parse(String(content || ''));
}
