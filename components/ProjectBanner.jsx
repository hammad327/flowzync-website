'use client';
// ─────────────────────────────────────────────────────────────
//  PROJECT BANNER — the wide sector photograph on a project page
//
//  Exists as its own client component so the whole banner can remove
//  itself if the photograph fails to load. Using components/Photo.jsx
//  directly would hide the image but leave its frame and caption chip
//  behind as an empty coloured strip.
//
//  There is deliberately no local fallback image. The only other
//  picture a project has is its full-page screenshot, and cropping a
//  4000px screenshot into a 21:9 band produces a meaningless sliver —
//  worse than the banner simply not being there. The framed
//  screenshot still appears below either way.
// ─────────────────────────────────────────────────────────────
import Image from 'next/image';
import { useState } from 'react';

export default function ProjectBanner({ photo, alt, label }) {
  const [failed, setFailed] = useState(false);
  if (!photo || failed) return null;

  return (
    <div className="wrap">
      <div className="proj-banner">
        <Image
          src={photo}
          alt={alt}
          width={1400}
          height={600}
          priority
          sizes="(max-width:1100px) 100vw, 1080px"
          onError={() => setFailed(true)}
        />
        <span className="proj-banner-chip">{label}</span>
      </div>
    </div>
  );
}
