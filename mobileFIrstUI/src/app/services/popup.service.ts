import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'

@Injectable({
	providedIn: 'root',
})
export class PopupService {
	constructor() {}

	private popUp = new Subject<boolean>()

	show() {
		this.popUp.next(true)
	}

	hide() {
		this.popUp.next(false)
	}

	listenToPopup() {
		return this.popUp.asObservable()
	}
}
