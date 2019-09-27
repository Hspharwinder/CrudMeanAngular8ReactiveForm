import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '',  redirectTo: '/home',  pathMatch: 'full' },  
  { path: 'app',  component: AppComponent }, 
  { path: 'home',  component: HomeComponent },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const nav = [AppComponent, HomeComponent];
