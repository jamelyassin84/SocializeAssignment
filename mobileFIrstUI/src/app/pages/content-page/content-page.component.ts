import { Component, OnInit } from '@angular/core'
import { IParallaxScrollConfig } from 'ngx-parallax-scroll'
import { PopupService } from 'src/app/services/popup.service'

@Component({
	selector: 'app-content-page',
	templateUrl: './content-page.component.html',
	styleUrls: ['./content-page.component.scss', './content-page.mobile.scss'],
})
export class ContentPageComponent implements OnInit {
	constructor(private popUp: PopupService) {}

	ngOnInit(): void {}

	ngParallaxConf: IParallaxScrollConfig = {
		parallaxSpeed: 1,
		parallaxSmoothness: 1,
		parallaxDirection: 'reverse',
		parallaxTimingFunction: 'ease-out',
		parallaxThrottleTime: 5,
	}

	show() {
		this.popUp.show()
	}
}
