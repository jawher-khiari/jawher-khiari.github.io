import { Component, inject } from '@angular/core';
import { StateService } from '../core/state.service';
import { SectionHeadComponent } from '../shared/section-head.component';
import { cx } from '../shared/ui';

@Component({
  selector: 'app-upcoming',
  standalone: true,
  imports: [SectionHeadComponent],
  template: `
    <section id="upcoming" [class]="cx.section">
      <div [class]="cx.container">
        <app-section-head [s]="t().upcoming"></app-section-head>
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          @for (it of t().upcoming.items; track it.title) {
            <article [class]="cx.card">
              <div class="aspect-[16/10] w-full bg-surf2">
                @if (it.img) {
                  <img [src]="it.img" [alt]="it.title" class="h-full w-full object-cover" />
                } @else {
                  <div class="flex h-full w-full items-center justify-center font-mono text-xs uppercase tracking-[0.12em] text-faint">
                    Screenshot soon
                  </div>
                }
              </div>
              <div class="p-6">
                <span [class]="cx.badgeWip"><span class="h-2 w-2 animate-dotpulse rounded-full bg-current"></span>{{ t().upcoming.badge }}</span>
                <h3 class="mb-1.5 mt-3.5 font-display text-[1.125rem] font-semibold tracking-tight text-ink">{{ it.title }}</h3>
                <p class="m-0 text-sm leading-snug text-muted">{{ it.desc }}</p>
              </div>
            </article>
          }
        </div>
      </div>
    </section>
  `,
})
export class UpcomingComponent {
  private state = inject(StateService);
  t = this.state.t;
  cx = cx;
}
