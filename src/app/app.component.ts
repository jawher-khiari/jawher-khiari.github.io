import { Component, HostListener, OnInit, inject } from '@angular/core';
import { StateService } from './core/state.service';
import { NavbarComponent } from './sections/navbar.component';
import { HeroComponent } from './sections/hero.component';
import { AboutComponent } from './sections/about.component';
import { ExperienceComponent } from './sections/experience.component';
import { SkillsComponent } from './sections/skills.component';
import { ProjectsComponent } from './sections/projects.component';
import { UpcomingComponent } from './sections/upcoming.component';
import { ContactComponent } from './sections/contact.component';
import { FooterComponent } from './sections/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent, HeroComponent, AboutComponent, ExperienceComponent,
    SkillsComponent, ProjectsComponent, UpcomingComponent, ContactComponent, FooterComponent,
  ],
  template: `
    <app-navbar></app-navbar>
    <main>
      <app-hero></app-hero>
      <app-about></app-about>
      <app-experience></app-experience>
      <app-skills></app-skills>
      <app-projects></app-projects>
      <app-upcoming></app-upcoming>
      <app-contact></app-contact>
    </main>
    <app-footer></app-footer>
  `,
})
export class AppComponent implements OnInit {
  private state = inject(StateService);
  private ids = ['about', 'experience', 'skills', 'projects', 'upcoming', 'contact'];

  ngOnInit() { this.updateActive(); }

  @HostListener('window:scroll')
  updateActive() {
    const line = window.innerHeight * 0.45;
    let current = this.ids[0];
    for (const id of this.ids) {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= line) current = id;
    }
    this.state.setActive(current === 'upcoming' ? 'projects' : current);
  }
}
