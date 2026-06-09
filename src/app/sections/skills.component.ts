import { Component, inject } from '@angular/core';
import { StateService } from '../core/state.service';
import { SectionHeadComponent } from '../shared/section-head.component';
import { IconComponent, GROUP_ICON } from '../shared/icon.component';
import { cx } from '../shared/ui';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SectionHeadComponent, IconComponent],
  template: `
    <section id="skills" [class]="cx.section">
      <div [class]="cx.container">
        <app-section-head [s]="t().skills"></app-section-head>
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          @for (g of t().skills.groups; track g.name) {
            <div class="rounded-card border border-line bg-card p-6 shadow-inset1 transition-[transform,border-color] duration-200 ease-brand hover:-translate-y-1 hover:border-line2">
              <div class="mb-4 flex items-center gap-3">
                <span class="inline-flex h-[38px] w-[38px] items-center justify-center rounded-field bg-accsoft text-[1.15rem] text-acc2">
                  <app-icon [name]="iconFor(g.name)"></app-icon>
                </span>
                <span class="font-display text-[1.125rem] font-semibold tracking-tight text-ink">{{ g.name }}</span>
              </div>
              <div class="flex flex-wrap gap-2">
                @for (it of g.items; track it) { <span [class]="cx.tag">{{ it }}</span> }
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class SkillsComponent {
  private state = inject(StateService);
  t = this.state.t;
  cx = cx;
  iconFor(name: string): string { return GROUP_ICON[name] || 'layers'; }
}
