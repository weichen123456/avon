import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import 'hammerjs';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { EnergyComponent } from './components/energy/energy.component';
import { ServicesComponent } from './components/services/services.component';
import { OptimisationsComponent } from './components/optimisations/optimisations.component';
import { MachineComponent } from './components/machine/machine.component';
import { ContactComponent } from './components/contact/contact.component';
import { ConsultingComponent } from './components/consulting/consulting.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { PortfoiloComponent } from './components/portfoilo/portfoilo.component';
import { TeamComponent } from './components/team/team.component';
import { BlogComponent } from './components/blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EnergyComponent,
    ServicesComponent,
    OptimisationsComponent,
    MachineComponent,
    ContactComponent,
    ConsultingComponent,
    AboutusComponent,
    PortfoiloComponent,
    TeamComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,

    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
