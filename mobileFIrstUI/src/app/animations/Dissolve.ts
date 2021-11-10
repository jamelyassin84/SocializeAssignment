import { trigger, style, animate, transition } from '@angular/animations'

export const dissolve = () => {
	const open = {
		opacity: 0,
	}
	const close = {
		opacity: 1,
	}
	return trigger('Dissolve', [
		transition(':enter', [
			style(open),
			animate('.3s ease-out', style(close)),
		]),
		transition(':leave', [
			style(close),
			animate('.3s ease-out', style(open)),
		]),
		transition('Home => ContentPage', [
			style(open),
			animate('.3s ease-out', style(close)),
		]),
	])
}
