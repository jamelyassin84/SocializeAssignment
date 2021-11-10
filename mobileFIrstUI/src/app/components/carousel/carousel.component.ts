import { Component, Input, OnInit } from '@angular/core'

@Component({
	selector: 'app-carousel',
	templateUrl: './carousel.component.html',
	styleUrls: ['./carousel.component.scss', './carousel.mobile.scss'],
})
export class CarouselComponent implements OnInit {
	constructor() {}

	@Input() bg: boolean = false

	ngOnInit(): void {}
}
