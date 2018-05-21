import { BrowserModule }	from '@angular/platform-browser';
import { NgModule }			from '@angular/core';
import { HttpClientModule }	from '@angular/common/http';
import { FormsModule }		from '@angular/forms';
import { RouterModule, Routes }	from '@angular/router';


import { AppComponent }		from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';


const routes = [
	{path:'login', component: LoginComponent},
	{path:'home', component: HomeComponent}
]


@NgModule({
	declarations: [
		HeaderComponent,
		AppComponent,
		LoginComponent,
		HomeComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		FormsModule,
		RouterModule.forRoot(routes)
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
