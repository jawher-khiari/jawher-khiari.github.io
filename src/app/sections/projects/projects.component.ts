import { Component, inject } from '@angular/core';
import { StateService } from '../../core/state.service';
import { SectionHeadComponent } from '../../components/ui/section-head/section-head.component';
import { IconComponent } from '../../components/ui/icon/icon.component';
import { cx } from '../../shared/ui';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [SectionHeadComponent, IconComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  private state = inject(StateService);
  t = this.state.t;
  cx = cx;
}
