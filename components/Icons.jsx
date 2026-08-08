// Central icon set — add new icons here and reference by name in lib/services.js
export const Icon = ({ name, color = '#5B4FE9', size = 26 }) => {
  const p = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none' };
  const s = { stroke: color, strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' };
  switch (name) {
    case 'palette': return (<svg {...p}><circle cx="12" cy="12" r="9" {...s}/><circle cx="8.5" cy="10" r="1.4" fill={color}/><circle cx="12" cy="7.5" r="1.4" fill={color}/><circle cx="15.5" cy="10" r="1.4" fill={color}/><path d="M12 21c0-3 2-3.5 4-3.5 2.5 0 3-1.5 3-3" {...s}/></svg>);
    case 'target': return (<svg {...p}><circle cx="12" cy="12" r="9" {...s}/><circle cx="12" cy="12" r="5" {...s}/><circle cx="12" cy="12" r="1.6" fill={color}/></svg>);
    case 'funnel': return (<svg {...p}><path d="M3 4h18l-7 8v6l-4 2v-8L3 4Z" {...s}/></svg>);
    case 'bolt': return (<svg {...p}><path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" fill={color}/></svg>);
    case 'grid': return (<svg {...p}><rect x="3" y="3" width="8" height="8" rx="2" {...s}/><rect x="13" y="13" width="8" height="8" rx="2" {...s}/><path d="M11 7h4a2 2 0 0 1 2 2v4" {...s}/></svg>);
    case 'code': return (<svg {...p}><path d="m8 6-5 6 5 6m8-12 5 6-5 6" {...s}/></svg>);
    case 'cart': return (<svg {...p}><path d="M6 6h15l-1.5 9h-12L5 3H2" {...s}/><circle cx="9" cy="20" r="1.6" fill={color}/><circle cx="18" cy="20" r="1.6" fill={color}/></svg>);
    case 'search': return (<svg {...p}><circle cx="11" cy="11" r="7" {...s}/><path d="m21 21-4.3-4.3" {...s}/></svg>);
    case 'layers': return (<svg {...p}><path d="m12 2 9 5-9 5-9-5 9-5Z" {...s}/><path d="m3 12 9 5 9-5" {...s}/><path d="m3 17 9 5 9-5" {...s}/></svg>);
    case 'pen': return (<svg {...p}><path d="m14 4 6 6L8 22H2v-6L14 4Z" {...s}/><path d="m11 7 6 6" {...s}/></svg>);
    case 'shield': return (<svg {...p}><path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4Z" {...s}/><path d="m9 12 2 2 4-4" {...s}/></svg>);
    case 'arrow': return (<svg {...p} width={16} height={16}><path d="M5 12h14m-6-6 6 6-6 6" {...s} strokeWidth={2.2}/></svg>);
    default: return null;
  }
};
export const colorHex = { lav: '#5B4FE9', mint: '#06C299', peach: '#FF7A3D' };
