import { Component, computed, inject } from '@angular/core';
import { StateService } from '../../core/state.service';
import { IconComponent } from '../../components/ui/icon/icon.component';
import { cx } from '../../shared/ui';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  private state = inject(StateService);
  t = this.state.t;
  cx = cx;
  first = computed(() => this.t().hero.name.split(' ')[0]);
  rest = computed(() => this.t().hero.name.split(' ').slice(1).join(' '));
}
