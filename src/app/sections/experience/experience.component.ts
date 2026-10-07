import { Component, inject } from '@angular/core';
import { StateService } from '../../core/state.service';
import { SectionHeadComponent } from '../../components/ui/section-head/section-head.component';
import { cx } from '../../shared/ui';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [SectionHeadComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  private state = inject(StateService);
  t = this.state.t;
  cx = cx;
}
