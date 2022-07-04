import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { BlogComponent } from './components/blog/blog.component';
import { ConsultingComponent } from './components/consulting/consulting.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { MachineComponent } from './components/machine/machine.component';
import { OptimisationsComponent } from './components/optimisations/optimisations.component';
import { PortfoiloComponent } from './components/portfoilo/portfoilo.component';
import { ServicesComponent } from './components/services/services.component';
import { TeamComponent } from './components/team/team.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'aboutus', component: AboutusComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'portfoilo', component: PortfoiloComponent},
  {path: 'team', component: TeamComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'consulting', component: ConsultingComponent},
  {path: 'optimisation', component: OptimisationsComponent},
  {path: 'machine', component: MachineComponent},
  {path: 'contact', component: ContactComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
