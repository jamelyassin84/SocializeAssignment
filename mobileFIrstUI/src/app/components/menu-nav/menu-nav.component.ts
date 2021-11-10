import { Component, OnInit } from '@angular/core'
import { PopupService } from 'src/app/services/popup.service'

@Component({
	selector: 'app-menu-nav',
	templateUrl: './menu-nav.component.html',
	styleUrls: ['./menu-nav.component.scss', './menu-nav.mobile.scss'],
})
export class MenuNavComponent implements OnInit {
	constructor(private popUp: PopupService) {}

	ngOnInit(): void {}

	show() {
		this.popUp.show()
	}
}
