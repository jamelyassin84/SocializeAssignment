import { Component, Input, OnInit } from '@angular/core'

@Component({
	selector: 'app-place-holder',
	templateUrl: './place-holder.component.html',
	styleUrls: ['./place-holder.component.scss', './place-holder.mobile.scss'],
})
export class PlacHolderComponent implements OnInit {
	constructor() {}

	@Input() width: number = 0
	@Input() height: number = 0
	@Input() color!: string
	@Input() iconWidth: number = 0
	@Input() iconHeight: number = 0

	ngOnInit(): void {}
}
