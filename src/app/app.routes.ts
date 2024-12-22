import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { TripsComponent } from './components/trips/trips.component';
import { TransportationComponent } from './components/transportation/transportation.component';
import { AuthenticationComponent } from './authentication/authentication.component';
export const routes: Routes = [
  {
    path: '', // Default route for the home page
    component: HomePageComponent,
  },
  {
    path: 'trips', // Default route for the home page
    component: TripsComponent,
  },
  {
    path: 'transportation', // Default route for the home page
    component: TransportationComponent,
  },
  {
    path: 'authentication', // Default route for the home page
    component: AuthenticationComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
