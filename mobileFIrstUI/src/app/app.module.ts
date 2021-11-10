import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgxParallaxScrollModule } from 'ngx-parallax-scroll'

import { AppComponent } from './app.component'
import { HomePageComponent } from './pages/home-page/home-page.component'
import { ContentPageComponent } from './pages/content-page/content-page.component'
import { MenuComponent } from './pages/menu/menu.component'
import { PopUpComponent } from './components/pop-up/pop-up.component'
import { CarouselComponent } from './components/carousel/carousel.component'
import { FooterComponent } from './components/footer/footer.component'
import { MainNavComponent } from './components/main-nav/main-nav.component'
import { MenuNavComponent } from './components/menu-nav/menu-nav.component'
import { PlacHolderComponent } from './components/place-holder/place-holder.component'
import { EllipseComponent } from './components/ellipse/ellipse.component'
import { DotsComponent } from './components/dots/dots.component'
import { PreventPropagationDirective } from './directives/prevent-propagation.directive'

@NgModule({
	declarations: [
		AppComponent,
		HomePageComponent,
		ContentPageComponent,
		MenuComponent,
		PopUpComponent,
		CarouselComponent,
		FooterComponent,
		MainNavComponent,
		MenuNavComponent,
		PlacHolderComponent,
		EllipseComponent,
		DotsComponent,
		PreventPropagationDirective,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		NgxParallaxScrollModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
