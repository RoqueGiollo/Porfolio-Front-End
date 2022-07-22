import { TmplAstBoundAttribute } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { EditExperienciaComponent } from './experience/edit-experiencia.component';
import { EducationComponent } from './education/education.component';
import { NewExperienciaComponent } from './experience/new-experiencia.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { EditEducacionComponent } from './education/edit-educacion.component';
import { NewEducacionComponent } from './education/new-educacion.component';
import { EditAcercaComponent } from './about/edit-acerca.component';

const routes: Routes = [
  {path: '', component: AboutComponent},
  {path: 'login', component: LoginComponent},
  {path: 'nuevaexp', component:NewExperienciaComponent}, //ruterlink para CREAR desde experience component principal
  {path: 'editexp/:id', component:EditExperienciaComponent}, //ruterlink para EDITAR desde component principal-importante el /:id para poder editar dependiendo el id
  {path: 'education', component: EducationComponent},
  {path: 'experience', component: ExperienceComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'editedu/:id', component:EditEducacionComponent},
  {path: 'nuevaedu', component:NewEducacionComponent},
  {path: 'edithab/:id', component:EditEducacionComponent},
  {path: 'nuevahab', component:NewEducacionComponent},
  {path: 'editace/:id', component:EditAcercaComponent} 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
