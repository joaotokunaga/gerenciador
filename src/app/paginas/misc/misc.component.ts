import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-misc',
	templateUrl: './misc.component.html',
	styleUrls: ['./misc.component.css']
})
export class MiscComponent implements OnInit {

	pagina = ""

	constructor(private route: ActivatedRoute) { }

	ngOnInit(): void {
		this.route.queryParams.subscribe((params) => {
			this.pagina = params['pagina']
		})
	}

}
