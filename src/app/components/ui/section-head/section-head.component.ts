import { Component, Input } from '@angular/core';
import { cx } from '../../../shared/ui';
import { EyebrowComponent } from '../eyebrow/eyebrow.component';

interface Head { eyebrow: string; index: string; title: string; lead?: string; }

@Component({
  selector: 'app-section-head',
  standalone: true,
  imports: [EyebrowComponent],
  templateUrl: './section-head.component.html',
  styleUrl: './section-head.component.scss',
})
export class SectionHeadComponent {
  @Input({ required: true }) s!: Head;
  @Input() center = false;
  cx = cx;
}
