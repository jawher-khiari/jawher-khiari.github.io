// Shared Tailwind class tokens — mirror the design-system component styling.
// Kept as string constants so they're reused across sections (Tailwind scans .ts files).
export const cx = {
  container: 'mx-auto w-full max-w-container px-6 sm:px-8 lg:px-12',
  section: 'py-20 md:py-28',
  btn: 'inline-flex items-center justify-center gap-2 font-sans font-semibold leading-none tracking-tight whitespace-nowrap rounded-pill cursor-pointer transition duration-150 ease-brand active:translate-y-px focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[color:var(--accent-ring)]',
  btnLg: 'px-[1.9rem] py-[0.95rem] text-[1.125rem]',
  btnMd: 'px-6 py-3 text-base',
  btnPrimary: 'bg-accent text-onacc shadow-glow hover:bg-acc2 hover:-translate-y-0.5',
  btnSecondary: 'bg-transparent text-ink border border-line2 hover:bg-hover hover:border-accent',
  btnGhost: 'bg-transparent text-dim px-4 py-3 text-base hover:bg-hover hover:text-ink',
  iconBtn: 'inline-flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-pill border border-line bg-transparent text-dim transition duration-150 ease-brand hover:bg-hover hover:text-ink hover:border-line2 active:scale-95 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[color:var(--accent-ring)] cursor-pointer',
  tag: 'inline-flex items-center gap-2 rounded-pill border border-line bg-surf px-3.5 py-2 font-mono text-sm leading-none text-dim transition-[transform,border-color,color] duration-150 ease-brand hover:-translate-y-px hover:border-accent hover:text-ink',
  card: 'relative flex flex-col overflow-hidden rounded-card border border-line bg-card shadow-inset1',
  secTitle: 'm-0 font-display font-bold leading-snug tracking-tight text-ink text-[clamp(2rem,4.6vw,3rem)]',
  secLead: 'm-0 max-w-prose2 text-[1.125rem] leading-relaxed text-muted',
  idx: 'mr-2 font-medium text-faint',
  label: 'font-mono text-xs font-medium uppercase tracking-[0.1em] text-muted',
  input: 'w-full rounded-field border border-line bg-surf px-4 py-3 font-sans text-base leading-snug text-ink placeholder:text-faint transition duration-150 ease-brand hover:border-line2 focus:border-accent focus:bg-elev focus:outline-none focus:ring-[3px] focus:ring-[color:var(--accent-ring)]',
  badgeAccent: 'inline-flex items-center gap-1.5 rounded-pill bg-accsoft px-2.5 py-1 font-mono text-xs font-medium uppercase tracking-wider text-acc2',
  badgeWip: 'inline-flex items-center gap-1.5 rounded-pill px-2.5 py-1 font-mono text-xs font-medium uppercase tracking-wider text-wip bg-[color-mix(in_srgb,var(--wip)_14%,transparent)]',
};
