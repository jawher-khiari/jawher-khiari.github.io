import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-eyebrow',
  standalone: true,
  templateUrl: './eyebrow.component.html',
  styleUrl: './eyebrow.component.scss',
})
export class EyebrowComponent {
  @Input() center = false;
}
