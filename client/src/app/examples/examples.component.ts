import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss']
})
export class ExamplesComponent {
	uptime;
	serverTime;
	count = 0;

	constructor(private http:HttpClient) {		// Inject HttpClient as http
		this.getUptime();
		this.getServerTime();
		this.getCount();
	}

	getUptime() {
		return this.http.get('/api/example/uptime').toPromise().then((result:any) => {
			this.uptime = result.uptime;
		});
	}

	getServerTime() {
		return this.http.get('/api/example/time').toPromise().then((result:any) => {
			this.serverTime = result.text;
		});
	}


	getCount() {
		return this.http.get('/api/example/count').toPromise().then((result:any) => {
			this.count = result.count;
		});
	}
}
