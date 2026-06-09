import { Component, inject } from '@angular/core';
import { StateService } from '../core/state.service';
import { SectionHeadComponent } from '../shared/section-head.component';
import { cx } from '../shared/ui';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [SectionHeadComponent],
  template: `
    <section id="experience" [class]="cx.section">
      <div [class]="cx.container">
        <app-section-head [s]="t().experience"></app-section-head>
        <div class="max-w-[52rem]">
          @for (it of t().experience.items; track it.role; let i = $index; let last = $last) {
            <div class="relative pl-10" [class.pb-11]="!last">
              @if (!last) {
                <span class="absolute left-[7px] top-2 bottom-[-8px] w-0.5 bg-[linear-gradient(var(--border-strong),var(--border)_70%,transparent)]" aria-hidden="true"></span>
              }
              <span class="absolute left-0 top-1 h-4 w-4 rounded-full border-2"
                    [class]="it.current ? 'border-accent bg-accent shadow-[0_0_0_4px_var(--accent-soft)]' : 'border-line2 bg-surf'"
                    aria-hidden="true"></span>
              <div class="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <span class="font-display text-[1.375rem] font-semibold tracking-tight text-ink">{{ it.role }}</span>
                <span class="whitespace-nowrap font-mono text-xs tracking-wide text-acc2">{{ it.period }}</span>
              </div>
              <div class="mb-3.5 mt-1 text-sm text-muted"><b class="font-semibold text-dim">{{ it.company }}</b> · {{ it.context }} · {{ it.location }}</div>
              <ul class="m-0 flex list-disc flex-col gap-2 pl-[1.1rem] text-base leading-snug text-dim marker:text-accent">
                @for (p of it.points; track p) { <li>{{ p }}</li> }
              </ul>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class ExperienceComponent {
  private state = inject(StateService);
  t = this.state.t;
  cx = cx;
}
