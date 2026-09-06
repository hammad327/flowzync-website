'use client';
// ─────────────────────────────────────────────────────────────
//  PHOTO — a photograph, with a local illustration as safety net
//
//  Every stock photograph on this site (blog covers, service and
//  industry headers, project heroes) is a remote URL that could not
//  be verified when it was added, because the build environment has
//  no outbound access to image hosts. A retired or mistyped photo ID
//  would normally leave a broken-image icon on the page, which looks
//  considerably worse than having no photo at all.
//
//  So this renders the photograph and swaps to the local SVG the
//  moment loading fails. The visitor never sees a broken image; a
//  dead URL just costs a nicer picture.
//
//  It is a client component because onError only exists in the
//  browser — the server cannot know whether a remote host will answer.
// ─────────────────────────────────────────────────────────────
import Image from 'next/image';
import { useState } from 'react';

export default function Photo({
  photo,
  fallback,
  alt,
  width,
  height,
  priority = false,
  sizes,
  className,
  style,
}) {
  const [src, setSrc] = useState(photo || fallback);

  // Nothing to try — render nothing rather than an empty box.
  if (!src) return null;

  const onFallback = src === fallback;

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      sizes={sizes}
      className={className}
      style={style}
      // Only ever falls back once. Without the guard, an illustration
      // that itself failed to load would retrigger this forever.
      onError={() => {
        if (fallback && !onFallback) setSrc(fallback);
      }}
    />
  );
}
