import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { HomeComponent } from './home/home.component';
import { SubtractionComponent } from './subtraction/subtraction.component';

const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Sum', component: AddComponent },
  { path: 'Subtration', component: SubtractionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
