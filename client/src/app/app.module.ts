import { BrowserModule }	from '@angular/platform-browser';
import { NgModule }			from '@angular/core';
import { HttpClientModule }	from '@angular/common/http';

import { AppRoutingModule }	from './app-routing.module';
import { ApiService }		from './api.service';

import { AppComponent }		from './app.component';
import { HomeComponent }	from './home/home.component';


@NgModule({
	declarations: [
		AppComponent,
		HomeComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		AppRoutingModule
	],
	providers: [ApiService],
	bootstrap: [AppComponent]
})
export class AppModule { }
