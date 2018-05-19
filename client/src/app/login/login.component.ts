import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent {
	username;
	password;
	message;


	constructor(private http:HttpClient) { }
	login() {
		this.http.post('/api/login', {username: this.username, password: this.password}).toPromise().then(result => {
			console.log(result);
			this.message = result;
		})
	}


}
