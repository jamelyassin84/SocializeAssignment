import { slideRight } from './animations/SlideRight'
import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { dissolve } from './animations/Dissolve'
import { slideLeft } from './animations/SlideLeft'
import { PopupService } from './services/popup.service'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	animations: [dissolve(), slideLeft(), slideRight()],
})
export class AppComponent {
	title = 'mobileFIrstUI'

	constructor(private service: PopupService) {
		this.service
			.listenToPopup()
			.subscribe((value) => (this.willShowPopUp = value))
	}

	willShowPopUp: boolean = false

	prepareRoute(outlet: RouterOutlet) {
		return outlet?.activatedRouteData?.['animation']
	}
}
