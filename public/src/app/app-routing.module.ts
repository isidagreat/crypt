import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItempageComponent } from './itempage/itempage.component';
import { HomeComponent } from './home/home.component'

const routes: Routes = [
  {path: 'item', component:ItempageComponent},
  {path: 'home', component:HomeComponent },
  {path: '', pathMatch:'full', redirectTo:'home'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }