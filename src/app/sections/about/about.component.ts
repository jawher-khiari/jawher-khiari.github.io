import { Component, inject } from '@angular/core';
import { StateService } from '../../core/state.service';
import { EyebrowComponent } from '../../components/ui/eyebrow/eyebrow.component';
import { cx } from '../../shared/ui';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [EyebrowComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  private state = inject(StateService);
  t = this.state.t;
  cx = cx;
}
