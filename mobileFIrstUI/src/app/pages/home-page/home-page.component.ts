import { Component, OnInit } from '@angular/core'
import { IParallaxScrollConfig } from 'ngx-parallax-scroll'
import { PopupService } from 'src/app/services/popup.service'

@Component({
	selector: 'app-home-page',
	templateUrl: './home-page.component.html',
	styleUrls: ['./home-page.component.scss', './home-page.mobile.scss'],
})
export class HomePageComponent implements OnInit {
	constructor(private popUp: PopupService) {}

	ngParallaxConf: IParallaxScrollConfig = {
		parallaxSpeed: 12,
		parallaxSmoothness: 2,
		parallaxDirection: 'reverse',
		parallaxTimingFunction: 'ease-out',
		parallaxThrottleTime: 1,
	}

	ngOnInit(): void {}

	show() {
		this.popUp.show()
	}
}
