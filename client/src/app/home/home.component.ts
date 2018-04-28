import { Component } from '@angular/core';

import { ApiService } from '../api.service';


@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent {
	time:any;

	constructor(private api:ApiService) {
		this.api.getTime().then(time => {
			this.time = time;
		});
	}



}
