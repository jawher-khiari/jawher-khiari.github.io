import { Component, HostListener, inject, signal } from '@angular/core';
import { StateService } from '../../core/state.service';
import { IconComponent } from '../../components/ui/icon/icon.component';
import { cx } from '../../shared/ui';
import { Lang } from '../../data/content';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  state = inject(StateService);
  cx = cx;
  links: Array<'about' | 'experience' | 'skills' | 'projects' | 'contact'> = ['about', 'experience', 'skills', 'projects', 'contact'];
  langs: Lang[] = ['en', 'fr'];
  open = signal(false);
  scrolled = signal(false);
  t = this.state.t;

  @HostListener('window:scroll')
  onScroll() { this.scrolled.set(window.scrollY > 12); }
}
