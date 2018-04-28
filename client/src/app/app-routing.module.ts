import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

const routes:Routes = [
	{path:'home',	component:HomeComponent},
	{path:'',	redirectTo:'/home',	pathMatch:'full'},		// Redirect / to /home
	{path: '**',	component:HomeComponent}				// Redirect not found paths to /home
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
