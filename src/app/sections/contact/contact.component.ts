import { Component, inject, signal } from '@angular/core';
import { StateService } from '../../core/state.service';
import { EyebrowComponent } from '../../components/ui/eyebrow/eyebrow.component';
import { IconComponent } from '../../components/ui/icon/icon.component';
import { cx } from '../../shared/ui';
import { JK_CONTACT } from '../../data/content';

interface Row { icon: string; lbl: string; val: string; href: string | null; }

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [EyebrowComponent, IconComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
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
