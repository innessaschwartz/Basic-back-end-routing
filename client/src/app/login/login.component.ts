import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent {
	username;
	password;
	message;


	constructor(private http:HttpClient, private router:Router) { }
	login() {
		this.http.post('/api/login', {username: this.username, password: this.password}).toPromise().then(result => {
			console.log(result);
			this.message = result;
			if(result) {
				return this.router.navigate(['home']);
			}
				this.message = 'Username or Password is invalid, stop sucking....';
		});
	};


}
