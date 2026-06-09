import { Component, computed, inject } from '@angular/core';
import { StateService } from '../core/state.service';
import { IconComponent } from '../shared/icon.component';
import { cx } from '../shared/ui';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [IconComponent],
  template: `
    <section id="top" class="relative flex min-h-[100svh] items-center overflow-hidden pt-[var(--navbar-h)]">
      <div class="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        <div class="absolute -left-[10vw] -top-[16vw] h-[48vw] w-[48vw] animate-floa rounded-full opacity-50 blur-[90px] bg-[radial-gradient(circle,var(--violet-500),transparent_65%)]"></div>
        <div class="absolute -bottom-[16vw] -right-[12vw] h-[42vw] w-[42vw] animate-flob rounded-full opacity-[0.35] blur-[90px] bg-[radial-gradient(circle,var(--magenta-500),transparent_65%)]"></div>
      </div>
      <div class="pointer-events-none absolute inset-0 z-0 opacity-50 [mask-image:radial-gradient(circle_at_50%_40%,#000,transparent_72%)] [background-size:64px_64px] bg-[linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)]" aria-hidden="true"></div>

      <div class="relative z-10 grid grid-cols-1 items-center gap-10 md:grid-cols-[1.35fr_1fr] md:gap-16" [class]="cx.container">
        <div>
          <div class="mb-6 inline-flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.08em] text-muted">
            <span class="h-2 w-2 animate-ping2 rounded-full bg-ok"></span>{{ t().hero.status }}
          </div>
          <h1 class="m-0 mb-4 font-display font-bold leading-[1.02] tracking-tighter2 text-ink text-[clamp(2.7rem,7vw,5.5rem)]">
            {{ first() }} <span class="bg-[image:var(--grad-accent)] bg-clip-text text-transparent">{{ rest() }}</span>
          </h1>
          <p class="m-0 mb-5 font-display font-medium tracking-tight text-dim text-[clamp(1.1rem,2.4vw,1.75rem)]">{{ t().hero.title }}</p>
          <p class="m-0 mb-8 max-w-[34rem] text-[1.125rem] leading-relaxed text-muted">{{ t().hero.tagline }}</p>
          <div class="flex flex-wrap items-center gap-3.5">
            <a [class]="cx.btn + ' ' + cx.btnLg + ' ' + cx.btnPrimary" href="#projects">{{ t().cta.work }}<app-icon name="arrow-right"></app-icon></a>
            <a [class]="cx.btn + ' ' + cx.btnLg + ' ' + cx.btnSecondary" href="assets/Jawher-Khiari-CV.pdf" target="_blank" rel="noopener"><app-icon name="download"></app-icon>{{ t().cta.cv }}</a>
            <span class="ml-1 inline-flex items-center gap-1.5 text-sm text-faint"><app-icon name="map-pin"></app-icon>{{ t().hero.location }}</span>
          </div>
        </div>
        <div class="relative justify-self-center w-[clamp(180px,30vw,330px)] aspect-square">
          <div class="absolute -inset-[10%] z-0 rounded-full bg-[image:var(--grad-accent)] opacity-40 blur-[46px]" aria-hidden="true"></div>
          <div class="relative z-10 h-full w-full rounded-full bg-[image:var(--grad-accent)] p-1">
            <img src="assets/jawher-portrait.jpg" [alt]="t().hero.name" class="h-full w-full rounded-full border-4 border-bg object-cover" />
          </div>
          <div class="absolute -right-[6%] top-[12%] z-20 hidden items-center gap-2 rounded-pill border border-line bg-[color:var(--glass-bg)] px-3.5 py-2 font-mono text-xs text-ink shadow-soft backdrop-blur-[14px] sm:flex">
            <span class="text-acc2"><app-icon name="cpu"></app-icon></span>.NET 8
          </div>
          <div class="absolute -right-[10%] bottom-[14%] z-20 hidden items-center gap-2 rounded-pill border border-line bg-[color:var(--glass-bg)] px-3.5 py-2 font-mono text-xs text-ink shadow-soft backdrop-blur-[14px] sm:flex">
            <span class="text-acc2"><app-icon name="code"></app-icon></span>Angular
          </div>
        </div>
      </div>
      <div class="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-faint sm:flex" aria-hidden="true">
        scroll<span class="h-8 w-px bg-[linear-gradient(var(--accent),transparent)]"></span>
      </div>
    </section>
  `,
})
export class HeroComponent {
  private state = inject(StateService);
  t = this.state.t;
  cx = cx;
  first = computed(() => this.t().hero.name.split(' ')[0]);
  rest = computed(() => this.t().hero.name.split(' ').slice(1).join(' '));
}
