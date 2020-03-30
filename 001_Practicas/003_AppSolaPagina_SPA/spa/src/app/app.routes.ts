import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';





const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'About', component: AboutComponent},
    { path: 'Heroes', component: HeroesComponent},
    { path: 'Heroe/:id', component: HeroeComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);