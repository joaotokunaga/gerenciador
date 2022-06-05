import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

	active: String = 'ciclo'

	constructor(private router: Router) {
		this.router.events.subscribe((event) => {
			if (event instanceof NavigationStart) {
				if (event.url == '/') this.active = 'ciclo'
				if (event.url == '/disciplinas') this.active = 'disciplinas'
				if (event.url == '/form') this.active = 'form'
			}
		})
	}

	ngOnInit(): void {
	}

}
