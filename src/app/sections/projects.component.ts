import { Component, inject } from '@angular/core';
import { StateService } from '../core/state.service';
import { SectionHeadComponent } from '../shared/section-head.component';
import { IconComponent } from '../shared/icon.component';
import { cx } from '../shared/ui';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [SectionHeadComponent, IconComponent],
  template: `
    <section id="projects" [class]="cx.section">
      <div [class]="cx.container">
        <app-section-head [s]="t().projects"></app-section-head>
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          @for (it of t().projects.items; track it.title) {
            <article class="group cursor-pointer p-7 transition-[transform,border-color,box-shadow] duration-200 ease-brand hover:-translate-y-1.5 hover:border-line2 hover:shadow-big"
                     [class]="cx.card">
              <span class="absolute inset-y-0 left-0 w-[3px] bg-[image:var(--grad-accent)] opacity-0 transition-opacity duration-200 group-hover:opacity-100" aria-hidden="true"></span>
              <div class="flex items-start justify-between">
                <span [class]="cx.badgeAccent">{{ it.tag }}</span>
                <span class="text-faint transition duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-acc2 text-[1.2rem]"><app-icon name="arrow-up-right"></app-icon></span>
              </div>
              <h3 class="mb-2.5 mt-4 font-display text-[1.375rem] font-semibold tracking-tight text-ink">{{ it.title }}</h3>
              <p class="m-0 mb-5 text-base leading-relaxed text-muted">{{ it.desc }}</p>
              <div class="mt-auto flex flex-wrap gap-2">
                @for (st of it.stack; track st) { <span [class]="cx.tag">{{ st }}</span> }
              </div>
            </article>
          }
        </div>
      </div>
    </section>
  `,
})
export class ProjectsComponent {
  private state = inject(StateService);
  t = this.state.t;
  cx = cx;
}
