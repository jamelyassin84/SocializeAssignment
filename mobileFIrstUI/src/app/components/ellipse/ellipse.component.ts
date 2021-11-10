import { Component, Input, OnInit } from '@angular/core'

@Component({
	selector: 'app-ellipse',
	templateUrl: './ellipse.component.html',
	styleUrls: ['./ellipse.component.scss', './ellipse.mobile.scss'],
})
export class EllipseComponent implements OnInit {
	constructor() {}

	@Input() width: number = 0
	@Input() height: number = 0
	@Input() color!: string

	ngOnInit(): void {}
}
