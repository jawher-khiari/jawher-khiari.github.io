import { Component, inject } from '@angular/core';
import { StateService } from '../../core/state.service';
import { SectionHeadComponent } from '../../components/ui/section-head/section-head.component';
import { cx } from '../../shared/ui';

@Component({
  selector: 'app-upcoming',
  standalone: true,
  imports: [SectionHeadComponent],
  templateUrl: './upcoming.component.html',
  styleUrl: './upcoming.component.scss',
})
export class UpcomingComponent {
  private state = inject(StateService);
  t = this.state.t;
  cx = cx;
}
