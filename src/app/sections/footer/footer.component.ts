import { Component, inject } from '@angular/core';
import { StateService } from '../../core/state.service';
import { IconComponent } from '../../components/ui/icon/icon.component';
import { cx } from '../../shared/ui';
import { JK_CONTACT } from '../../data/content';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
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
