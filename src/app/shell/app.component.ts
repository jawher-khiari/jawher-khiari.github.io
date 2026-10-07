import { Component, HostListener, OnInit, inject } from '@angular/core';
import { StateService } from '../core/state.service';
import { NavbarComponent } from '../sections/navbar/navbar.component';
import { HeroComponent } from '../sections/hero/hero.component';
import { AboutComponent } from '../sections/about/about.component';
import { ExperienceComponent } from '../sections/experience/experience.component';
import { SkillsComponent } from '../sections/skills/skills.component';
import { ProjectsComponent } from '../sections/projects/projects.component';
import { UpcomingComponent } from '../sections/upcoming/upcoming.component';
import { ContactComponent } from '../sections/contact/contact.component';
import { FooterComponent } from '../sections/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent, HeroComponent, AboutComponent, ExperienceComponent,
    SkillsComponent, ProjectsComponent, UpcomingComponent, ContactComponent, FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
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
