import { Component, OnInit } from '@angular/core'
import { navs } from 'src/app/components/menu-nav/Navs'
import { PopupService } from 'src/app/services/popup.service'

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.scss', './menu.mobile.scss'],
})
export class MenuComponent implements OnInit {
	navs = navs

	constructor(private popUp: PopupService) {}

	ngOnInit(): void {}

	show() {
		this.popUp.show()
	}
}
