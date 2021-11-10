import { Component, OnInit } from '@angular/core'
import { Router, RouterOutlet } from '@angular/router'

@Component({
	selector: 'app-main-nav',
	templateUrl: './main-nav.component.html',
	styleUrls: ['./main-nav.component.scss', './main-nav.mobile.scss'],
})
export class MainNavComponent implements OnInit {
	constructor(private route: Router) {}

	ngOnInit(): void {
		this.isOnContentPage = this.route.url !== '/home' ? true : false
	}

	isOnContentPage = false
}
