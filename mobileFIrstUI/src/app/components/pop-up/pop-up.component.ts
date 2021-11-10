import { dissolve } from './../../animations/Dissolve'
import { Component, OnInit } from '@angular/core'
import { PopupService } from 'src/app/services/popup.service'
import { Router } from '@angular/router'

@Component({
	selector: 'app-pop-up',
	templateUrl: './pop-up.component.html',
	styleUrls: ['./pop-up.component.scss', './pop-up.mobile.scss'],
	animations: [dissolve()],
})
export class PopUpComponent implements OnInit {
	constructor(private popUp: PopupService, private router: Router) {}

	ngOnInit(): void {
		this.isInMenu = this.router.url === '/menu' ? true : false
	}

	isInMenu = false
	hide() {
		this.popUp.hide()
	}
}
