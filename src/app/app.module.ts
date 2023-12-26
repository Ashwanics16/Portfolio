import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BanerComponent } from './baner/baner.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { WorkExpercienceComponent } from './work-expercience/work-expercience.component';
import { ProjectComponent } from './project/project.component';
import { SkillsComponent } from './skills/skills.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { ResponsiveDirective } from './directives/responsive.directive';

@NgModule({
  declarations: [
    AppComponent,
    BanerComponent,
    ContactComponent,
    EducationComponent,
    WorkExpercienceComponent,
    ProjectComponent,
    SkillsComponent,
    PersonalInformationComponent,
    ResponsiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
