import { Injectable, signal, computed, effect } from '@angular/core';
import { JK_DATA, Lang } from '../data/content';

type Theme = 'dark' | 'light';

function readLang(): Lang {
  try {
    const saved = localStorage.getItem('jk-lang') as Lang | null;
    if (saved === 'en' || saved === 'fr') return saved;
    return navigator.language?.toLowerCase().startsWith('fr') ? 'fr' : 'en';
  } catch { return 'en'; }
}

function readTheme(): Theme {
  try {
    const saved = localStorage.getItem('jk-theme') as Theme | null;
    if (saved === 'dark' || saved === 'light') return saved;
    return window.matchMedia?.('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  } catch { return 'dark'; }
}

@Injectable({ providedIn: 'root' })
export class StateService {
  readonly lang = signal<Lang>(readLang());
  readonly theme = signal<Theme>(readTheme());
  readonly active = signal<string>('about');

  /** Active translation dictionary for the current language. */
  readonly t = computed(() => JK_DATA[this.lang()]);

  constructor() {
    effect(() => {
      const th = this.theme();
      document.documentElement.setAttribute('data-theme', th);
      try { localStorage.setItem('jk-theme', th); } catch {}
    });
    effect(() => {
      const lg = this.lang();
      document.documentElement.setAttribute('lang', lg);
      try { localStorage.setItem('jk-lang', lg); } catch {}
    });
  }

  setLang(l: Lang) { this.lang.set(l); }
  toggleTheme() { this.theme.update(v => (v === 'dark' ? 'light' : 'dark')); }
  setActive(id: string) { this.active.set(id); }
}
