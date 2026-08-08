# Your images go here

Every image on the site is currently a branded placeholder. To replace one:

1. **Drop your file into the matching folder below.**
2. **Open `/lib/images.js`**, find the key, and change the path to your file.

That's it. Nothing else in the codebase points at image files directly, so one
edit updates every page that uses it.

## Folders

| Folder | Used for | Best size |
|---|---|---|
| `services/` | Service page headers and cards | 1200 × 800 (landscape) |
| `projects/` | Portfolio screenshots | 900 × 1600 (tall — these scroll on hover) |
| `industries/` | Industry landing pages | 1200 × 800 (landscape) |

Blog cover images are set per-post in the `cover:` field at the top of each
`.md` file in `/content/blog/`.

## Tips

- **Format:** `.jpg` or `.webp` for photos, `.png` or `.svg` for graphics.
- **Portfolio shots work best tall.** Capture the full page, not just the top —
  the hover-scroll effect needs the length to be worth it.
- **Compress before uploading.** [Squoosh](https://squoosh.app) is free and takes
  seconds. Aim under 300KB per photo. Next.js optimises further on top of that,
  but it can't undo a 6MB original.
- **Filename must match exactly**, including the extension. If you upload
  `aurelia-studio.jpg` but `lib/images.js` still says `.svg`, the image won't show.

## Quickest possible swap

Name your file exactly like the placeholder it replaces and change only the
extension in `lib/images.js`:

```js
'aurelia-studio': '/images/projects/aurelia-studio.svg',   // before
'aurelia-studio': '/images/projects/aurelia-studio.jpg',   // after
```
