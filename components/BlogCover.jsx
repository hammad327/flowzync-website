'use client';
// ─────────────────────────────────────────────────────────────
//  BLOG COVER — photograph, with the illustration as a safety net
//
//  Blog covers are stock photograph URLs (see lib/blogPhotos.js) that
//  could not be verified when they were added, because the build
//  environment has no outbound access to image hosts. A retired or
//  mistyped photo ID would normally leave a broken image icon on the
//  card, which looks worse than having no photo at all.
//
//  So this renders the photograph, and swaps to the post's local SVG
//  illustration the moment loading fails. The reader never sees a
//  broken image; a dead URL just costs a nicer picture.
//
//  It is a client component because onError only exists in the
//  browser — the server cannot know whether a remote host will answer.
// ─────────────────────────────────────────────────────────────
import Image from 'next/image';
import { useState } from 'react';

export default function BlogCover({
  photo,
  fallback,
  alt,
  width,
  height,
  priority = false,
  sizes,
}) {
  // Nothing to try: render the illustration directly.
  const [src, setSrc] = useState(photo || fallback);

  if (!src) return null;

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      sizes={sizes}
      // Only ever falls back once — if the illustration itself failed
      // we would loop, so the guard checks we are not already on it.
      onError={() => {
        if (fallback && src !== fallback) setSrc(fallback);
      }}
    />
  );
}
