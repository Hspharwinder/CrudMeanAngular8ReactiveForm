import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { InsertComponent } from './insert/insert.component';

const routes: Routes = [
  { path: '',  redirectTo: '/insert',  pathMatch: 'full' },  
  { path: 'app',  component: AppComponent }, 
  { path: 'insert',  component: InsertComponent },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const nav = [AppComponent, InsertComponent];
