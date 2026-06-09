import { Component, Input } from '@angular/core';
import { cx } from './ui';

interface Head { eyebrow: string; index: string; title: string; lead?: string; }

@Component({
  selector: 'app-eyebrow',
  standalone: true,
  template: `
    <span class="inline-flex items-center gap-2.5 font-mono text-xs font-medium uppercase tracking-eyebrow text-acc2"
          [class.justify-center]="center">
      @if (!center) { <span class="h-px w-7 bg-accent opacity-70"></span> }
      <ng-content></ng-content>
    </span>
  `,
})
export class EyebrowComponent {
  @Input() center = false;
}

@Component({
  selector: 'app-section-head',
  standalone: true,
  imports: [EyebrowComponent],
  template: `
    <div class="mb-12 flex flex-col gap-3.5"
         [class.mx-auto]="center" [class.items-center]="center" [class.text-center]="center"
         [class.max-w-prose2]="!center">
      <app-eyebrow [center]="center">{{ s.eyebrow }}</app-eyebrow>
      <h2 [class]="cx.secTitle"><span [class]="cx.idx">{{ s.index }}</span>{{ s.title }}</h2>
      @if (s.lead) { <p [class]="cx.secLead">{{ s.lead }}</p> }
    </div>
  `,
})
export class SectionHeadComponent {
  @Input({ required: true }) s!: Head;
  @Input() center = false;
  cx = cx;
}
