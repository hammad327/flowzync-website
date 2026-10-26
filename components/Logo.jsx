import { SYNC_TILE_PATH, brand } from '@/lib/brand';

// A single solid-colour icon; light/dark variants preserve the exact geometry.
export function LogoMark({ variant = 'color', size = 38 }) {
  const fill = variant === 'white' ? '#FFFFFF' : variant === 'onDark' ? '#B8D9CD' : variant === 'mono' ? 'currentColor' : brand.teal;
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-hidden="true" focusable="false" className="sync-mark" fill={fill}>
      {[0, 90, 180, 270].map((angle) => <path key={angle} d={SYNC_TILE_PATH} transform={`rotate(${angle} 50 50)`} />)}
    </svg>
  );
}

export default function Logo({ variant = 'color', size = 38, wordSize = 20, showWord = false }) {
  return (
    <span className="lg" style={{ fontSize: wordSize }}>
      <LogoMark variant={variant} size={size} />
      {showWord && <span className="sync-word" style={{ color: variant === 'white' || variant === 'onDark' ? '#fff' : 'var(--ink)' }}>flowzync</span>}
    </span>
  );
}
