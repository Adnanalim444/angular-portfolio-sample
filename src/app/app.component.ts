import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from "./hero/hero.component";
import { SkillsComponent } from "./skills/skills.component";
import { WorkExperienceComponent } from "./work-experience/work-experience.component";
import { ProjectComponent } from "./projects/project.component";
import { ContactComponent } from "./contact/contact.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeroComponent, SkillsComponent, WorkExperienceComponent, ProjectComponent, ContactComponent]
})
export class AppComponent {
  title = 'portfolio';
}
