import { trigger, style, animate, transition } from '@angular/animations'

export const slideRight = () => {
	const open = {
		transform: 'translateX(-100%)',
	}
	const close = {
		transform: 'translateX(0%)',
	}
	return trigger('SlideLeft', [
		transition('ContentPage => Home', [
			style(open),
			animate('.3s ease-out', style(close)),
		]),
		transition('Menu => ContentPage', [
			style(open),
			animate('.3s ease-out', style(close)),
		]),
		transition('Menu => Home', [
			style(open),
			animate('.3s ease-out', style(close)),
		]),
	])
}
