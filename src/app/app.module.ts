import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutProfileComponent } from './profile/about-profile/about-profile.component';
import { ContactInfoComponent } from './profile/contact-info/contact-info.component';
import { EducationComponent } from './education/education.component';
import { SchoolComponent } from './education/school/school.component';
import { PortfolioComponent } from './education/portfolio/portfolio.component';
import { SkillsComponent } from './education/skills/skills.component';




@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    AboutProfileComponent,
    ContactInfoComponent,
    EducationComponent,
    SchoolComponent,
    PortfolioComponent,
    SkillsComponent,
    
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
