import { Component, HostListener, inject, signal } from '@angular/core';
import { StateService } from '../core/state.service';
import { IconComponent } from '../shared/icon.component';
import { cx } from '../shared/ui';
import { Lang } from '../data/content';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [IconComponent],
  template: `
    <header class="fixed inset-x-0 top-0 z-50 flex h-[var(--navbar-h)] items-center transition duration-200 ease-brand"
            [class]="scrolled() ? 'border-b border-line bg-[color:var(--glass-bg)] backdrop-blur-[14px] backdrop-saturate-150' : 'border-b border-transparent'">
      <div class="mx-auto flex w-full max-w-wide items-center gap-6 px-6 sm:px-8 lg:px-12">
        <a class="inline-flex items-center gap-2.5 font-display text-[1.05rem] font-bold tracking-[-0.03em] text-ink" href="#top" aria-label="Jawher Khiari — home">
          <img src="assets/logo-monogram.svg" alt="" class="h-8 w-8" />
          <span class="whitespace-nowrap">Jawher Khiari<span class="text-accent">.</span></span>
        </a>
        <nav class="ml-auto hidden items-center gap-1 md:flex">
          @for (id of links; track id) {
            <a [href]="'#' + id"
               class="rounded-pill px-3.5 py-2 font-sans text-sm font-medium transition duration-150 ease-brand hover:bg-hover hover:text-ink"
               [class]="state.active() === id ? 'text-acc2' : 'text-muted'">{{ t().nav[id] }}</a>
          }
        </nav>
        <div class="ml-auto flex items-center gap-2 md:ml-2">
          <div class="inline-flex h-[42px] items-center gap-0.5 rounded-pill border border-line bg-surf p-[3px]" role="group" [attr.aria-label]="t().a11y.lang">
            @for (l of langs; track l) {
              <button (click)="state.setLang(l)"
                class="h-full cursor-pointer rounded-pill px-2.5 font-mono text-xs font-medium tracking-wide transition duration-150 ease-brand"
                [class]="state.lang() === l ? 'bg-accent text-onacc' : 'text-muted hover:text-ink'">{{ l.toUpperCase() }}</button>
            }
          </div>
          <button [class]="cx.iconBtn" [attr.aria-label]="t().a11y.theme" (click)="state.toggleTheme()">
            <app-icon [name]="state.theme() === 'dark' ? 'sun' : 'moon'"></app-icon>
          </button>
          <button [class]="cx.iconBtn + ' md:hidden'" [attr.aria-label]="t().a11y.menu" (click)="open.set(!open())">
            <app-icon [name]="open() ? 'x' : 'menu'"></app-icon>
          </button>
        </div>
      </div>
    </header>
    <div class="fixed inset-x-0 bottom-0 top-[var(--navbar-h)] z-40 flex flex-col gap-1 bg-bg px-6 py-4 transition-transform duration-200 ease-brand md:hidden"
         [class]="open() ? 'translate-x-0' : 'translate-x-full'">
      @for (id of links; track id) {
        <a [href]="'#' + id" (click)="open.set(false)"
           class="border-b border-line py-3 font-display text-2xl text-ink">{{ t().nav[id] }}</a>
      }
    </div>
  `,
})
export class NavbarComponent {
  state = inject(StateService);
  cx = cx;
  links: Array<'about' | 'experience' | 'skills' | 'projects' | 'contact'> = ['about', 'experience', 'skills', 'projects', 'contact'];
  langs: Lang[] = ['en', 'fr'];
  open = signal(false);
  scrolled = signal(false);
  t = this.state.t;

  @HostListener('window:scroll')
  onScroll() { this.scrolled.set(window.scrollY > 12); }
}
