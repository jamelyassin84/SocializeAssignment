import { Directive, HostListener } from '@angular/core'

@Directive({
	selector: '[appstopPropagation]',
})
export class PreventPropagationDirective {
	@HostListener('click', ['$event'])
	public onClick(event: MouseEvent) {
		event.preventDefault()
		event.stopPropagation()
		return false
	}
}
