import { Component, inject, signal } from '@angular/core';
import { StateService } from '../core/state.service';
import { EyebrowComponent } from '../shared/section-head.component';
import { IconComponent } from '../shared/icon.component';
import { cx } from '../shared/ui';
import { JK_CONTACT } from '../data/content';

interface Row { icon: string; lbl: string; val: string; href: string | null; }

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [EyebrowComponent, IconComponent],
  template: `
    <section id="contact" [class]="cx.section">
      <div [class]="cx.container">
        <div class="grid grid-cols-1 items-start gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
          <div>
            <div class="mb-2.5 flex flex-col gap-3.5">
              <app-eyebrow>{{ t().contact.eyebrow }}</app-eyebrow>
              <h2 [class]="cx.secTitle"><span [class]="cx.idx">{{ t().contact.index }}</span>{{ t().contact.title }}</h2>
            </div>
            <p [class]="cx.secLead">{{ t().contact.lead }}</p>
            <div class="mt-7 flex flex-col gap-2.5">
              @for (r of rows(); track r.lbl) {
                @if (r.href) {
                  <a class="flex items-center gap-3.5 rounded-field border border-line bg-card px-4 py-3.5 transition-[transform,border-color] duration-150 ease-brand hover:translate-x-0.5 hover:border-accent"
                     [href]="r.href" target="_blank" rel="noopener">
                    <span class="shrink-0 text-[1.2rem] text-acc2"><app-icon [name]="r.icon"></app-icon></span>
                    <span>
                      <span class="font-mono text-[10px] uppercase tracking-[0.12em] text-faint">{{ r.lbl }}</span><br />
                      <span class="text-sm text-ink">{{ r.val }}</span>
                    </span>
                  </a>
                } @else {
                  <div class="flex items-center gap-3.5 rounded-field border border-line bg-card px-4 py-3.5">
                    <span class="shrink-0 text-[1.2rem] text-acc2"><app-icon [name]="r.icon"></app-icon></span>
                    <span>
                      <span class="font-mono text-[10px] uppercase tracking-[0.12em] text-faint">{{ r.lbl }}</span><br />
                      <span class="text-sm text-ink">{{ r.val }}</span>
                    </span>
                  </div>
                }
              }
            </div>
          </div>
          <form class="flex flex-col gap-[1.1rem] rounded-card border border-line bg-card p-7 shadow-soft" (submit)="onSubmit($event)">
            <div class="grid grid-cols-1 gap-[1.1rem] sm:grid-cols-2">
              <div class="flex flex-col gap-1.5">
                <label [class]="cx.label" for="cf-name">{{ t().contact.form.name }}</label>
                <input [class]="cx.input" id="cf-name" [placeholder]="t().contact.form.namePh" required />
              </div>
              <div class="flex flex-col gap-1.5">
                <label [class]="cx.label" for="cf-email">{{ t().contact.form.email }}</label>
                <input [class]="cx.input" id="cf-email" type="email" [placeholder]="t().contact.form.emailPh" required />
              </div>
            </div>
            <div class="flex flex-col gap-1.5">
              <label [class]="cx.label" for="cf-msg">{{ t().contact.form.message }}</label>
              <textarea [class]="cx.input + ' min-h-[130px] resize-y'" id="cf-msg" rows="5" [placeholder]="t().contact.form.msgPh" required></textarea>
            </div>
            <div class="flex flex-wrap items-center gap-4">
              <button [class]="cx.btn + ' ' + cx.btnMd + ' ' + cx.btnPrimary" type="submit">{{ t().cta.send }}<app-icon name="arrow-right"></app-icon></button>
              <a [class]="cx.btn + ' ' + cx.btnGhost" href="assets/Jawher-Khiari-CV.pdf" target="_blank" rel="noopener"><app-icon name="download"></app-icon>{{ t().cta.cv }}</a>
              @if (sent()) { <span class="inline-flex items-center gap-1.5 font-mono text-sm text-ok"><app-icon name="check"></app-icon>Sent!</span> }
            </div>
          </form>
        </div>
      </div>
    </section>
  `,
})
export class ContactComponent {
  private state = inject(StateService);
  t = this.state.t;
  cx = cx;
  sent = signal(false);
  C = JK_CONTACT;

  rows(): Row[] {
    return [
      { icon: 'mail', lbl: 'Email', val: this.C.email, href: 'mailto:' + this.C.email },
      { icon: 'phone', lbl: 'Phone', val: this.C.phone, href: 'tel:' + this.C.phoneHref },
      { icon: 'linkedin', lbl: 'LinkedIn', val: this.C.linkedin, href: this.C.linkedinHref },
      { icon: 'map-pin', lbl: 'Location', val: this.t().hero.location, href: null },
    ];
  }

  onSubmit(e: Event) {
    e.preventDefault();
    this.sent.set(true);
    setTimeout(() => this.sent.set(false), 3500);
  }
}
