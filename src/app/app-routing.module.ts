import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AwesomeListComponent } from './awesome-list/awesome-list.component';
import { AwesomeUpdateComponent } from './awesome-update/awesome-update.component';

const routes: Routes = [
  {path: 'awesomes',
  children: [
    {path: '', component: AwesomeListComponent},
    {path: 'update/:id', component: AwesomeUpdateComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
