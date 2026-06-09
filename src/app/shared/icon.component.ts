import { Component, Input, OnChanges } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

// Lucide-style inline icons. Each entry is the inner SVG markup (24px grid, 2px stroke).
const PATHS: Record<string, string> = {
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  moon: '<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>',
  'arrow-right': '<path d="M5 12h14m0 0l-6-6m6 6l-6 6"/>',
  'arrow-up-right': '<path d="M7 17 17 7M8 7h9v9"/>',
  download: '<path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/>',
  'map-pin': '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>',
  github: '<path d="M12 2C6.5 2 2 6.6 2 12.3c0 4.5 2.9 8.3 6.8 9.7.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.4-3.4-1.4-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.6-1.4-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.7 1a9.3 9.3 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.3 4.7-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5 4-1.4 6.8-5.2 6.8-9.7C22 6.6 17.5 2 12 2z"/>',
  linkedin: '<rect x="2.5" y="2.5" width="19" height="19" rx="3"/><path d="M7 10v7M7 7v.01M11.5 17v-4a2 2 0 0 1 4 0v4M11.5 13v4"/>',
  menu: '<path d="M3 6h18M3 12h18M3 18h18"/>',
  x: '<path d="M6 6l12 12M18 6 6 18"/>',
  code: '<path d="m8 6-6 6 6 6M16 6l6 6-6 6"/>',
  shield: '<path d="M12 2 4 5v6c0 5 3.4 8.5 8 11 4.6-2.5 8-6 8-11V5z"/><path d="m9 12 2 2 4-4"/>',
  database: '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/>',
  plug: '<path d="M9 2v6M15 2v6M6 8h12v3a6 6 0 0 1-12 0zM12 17v5"/>',
  layers: '<path d="m12 2 9 5-9 5-9-5 9-5z"/><path d="m3 12 9 5 9-5M3 17l9 5 9-5"/>',
  cpu: '<rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2"/>',
  check: '<path d="m20 6-11 11-5-5"/>',
};

const FILLED = new Set(['github']);

// Skill-group name (EN + FR) → icon name.
export const GROUP_ICON: Record<string, string> = {
  Backend: 'cpu', Frontend: 'code', Integrations: 'plug', 'Intégrations': 'plug',
  Security: 'shield', 'Sécurité': 'shield', Databases: 'database', 'Bases de données': 'database',
  Engineering: 'layers', 'Génie logiciel': 'layers',
};

@Component({
  selector: 'app-icon',
  standalone: true,
  template: `<span class="inline-flex" [innerHTML]="svg"></span>`,
  styles: [':host{display:inline-flex;line-height:0}'],
})
export class IconComponent implements OnChanges {
  @Input() name = '';
  svg: SafeHtml = '';

  constructor(private san: DomSanitizer) {}

  ngOnChanges() {
    const inner = PATHS[this.name] || '';
    const filled = FILLED.has(this.name);
    const markup =
      `<svg viewBox="0 0 24 24" width="1em" height="1em" ` +
      `fill="${filled ? 'currentColor' : 'none'}" stroke="${filled ? 'none' : 'currentColor'}" ` +
      `stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${inner}</svg>`;
    this.svg = this.san.bypassSecurityTrustHtml(markup);
  }
}
