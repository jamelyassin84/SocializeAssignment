import { trigger, style, animate, transition } from '@angular/animations'

export const slideLeft = () => {
	const open = {
		transform: 'translateX(100%)',
	}
	const close = {
		transform: 'translateX(0%)',
	}
	return trigger('SlideRight', [
		transition('* => Menu', [
			style(open),
			animate('.3s ease-out', style(close)),
		]),
	])
}
