import { Component, inject } from '@angular/core';
import { StateService } from '../core/state.service';
import { EyebrowComponent } from '../shared/section-head.component';
import { cx } from '../shared/ui';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [EyebrowComponent],
  template: `
    <section id="about" [class]="cx.section">
      <div [class]="cx.container">
        <div class="mb-12 flex max-w-prose2 flex-col gap-3.5">
          <app-eyebrow>{{ t().about.eyebrow }}</app-eyebrow>
          <h2 [class]="cx.secTitle"><span [class]="cx.idx">{{ t().about.index }}</span>{{ t().about.title }}</h2>
        </div>
        <div class="grid grid-cols-1 items-start gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
          <div class="flex flex-col gap-5">
            <p class="m-0 text-[1.125rem] leading-relaxed text-ink">{{ t().about.body }}</p>
            <p class="m-0 text-[1.125rem] leading-relaxed text-muted">{{ t().about.body2 }}</p>
          </div>
          <div class="grid grid-cols-2 gap-4">
            @for (st of t().about.stats; track st.label) {
              <div class="rounded-lg2 border border-line bg-card p-6 shadow-inset1">
                <div class="font-display text-[2.25rem] font-bold leading-none tracking-[-0.03em] bg-[image:var(--grad-accent)] bg-clip-text text-transparent">{{ st.value }}</div>
                <div class="mt-2.5 text-sm leading-snug text-muted">{{ st.label }}</div>
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  `,
})
export class AboutComponent {
  private state = inject(StateService);
  t = this.state.t;
  cx = cx;
}
