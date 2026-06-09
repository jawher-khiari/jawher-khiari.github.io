import { Component, inject } from '@angular/core';
import { StateService } from '../core/state.service';
import { IconComponent } from '../shared/icon.component';
import { cx } from '../shared/ui';
import { JK_CONTACT } from '../data/content';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [IconComponent],
  template: `
    <footer class="border-t border-line py-12">
      <div class="flex flex-wrap items-center justify-between gap-5" [class]="cx.container">
        <a class="inline-flex items-center gap-2.5 font-display text-[1.05rem] font-bold tracking-[-0.03em] text-ink" href="#top">
          <img src="assets/logo-monogram.svg" alt="" class="h-8 w-8" />
          <span>Jawher Khiari<span class="text-accent">.</span></span>
        </a>
        <span class="text-sm text-muted">{{ t().footer.built }}</span>
        <div class="flex gap-2">
          @for (sc of socials; track sc.label) {
            <a [class]="cx.iconBtn" [href]="sc.href" target="_blank" rel="noopener" [attr.aria-label]="sc.label"><app-icon [name]="sc.icon"></app-icon></a>
          }
        </div>
        <div class="w-full font-mono text-[11px] tracking-wide text-faint">© {{ year }} Jawher Khiari — {{ t().footer.rights }}</div>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  private state = inject(StateService);
  t = this.state.t;
  cx = cx;
  year = new Date().getFullYear();
  socials = [
    { icon: 'github', href: JK_CONTACT.githubHref, label: 'GitHub' },
    { icon: 'linkedin', href: JK_CONTACT.linkedinHref, label: 'LinkedIn' },
    { icon: 'mail', href: 'mailto:' + JK_CONTACT.email, label: 'Email' },
  ];
}
