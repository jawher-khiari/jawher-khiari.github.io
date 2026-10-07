import { Component, inject } from '@angular/core';
import { StateService } from '../../core/state.service';
import { SectionHeadComponent } from '../../components/ui/section-head/section-head.component';
import { IconComponent, GROUP_ICON } from '../../components/ui/icon/icon.component';
import { cx } from '../../shared/ui';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SectionHeadComponent, IconComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  private state = inject(StateService);
  t = this.state.t;
  cx = cx;
  iconFor(name: string): string { return GROUP_ICON[name] || 'layers'; }
}
