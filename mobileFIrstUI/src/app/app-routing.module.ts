import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { PopUpComponent } from './components/pop-up/pop-up.component'
import { ContentPageComponent } from './pages/content-page/content-page.component'
import { HomePageComponent } from './pages/home-page/home-page.component'
import { MenuComponent } from './pages/menu/menu.component'

const routes: Routes = [
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full',
	},
	{
		path: 'home',
		component: HomePageComponent,
		data: { animation: 'Home' },
	},
	{
		path: 'content-page',
		component: ContentPageComponent,
		data: { animation: 'ContentPage' },
	},
	{
		path: 'menu',
		component: MenuComponent,
		data: { animation: 'Menu' },
	},
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
