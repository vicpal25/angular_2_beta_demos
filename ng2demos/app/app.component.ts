import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from 'angular2/router'

//import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig} from 'angular2/router';

import {Home} from './components/home/home.component'

//1
import {Basic} from './components/basic/basic.component';

//2
import {Newsletters} from './components/newsletters/newsletters.component';

//3)
import {Athelete} from './components/tsfeatures/athlete.component';

//4)
import { NewsletterService } from './components/masterdetail/newsletter.service';
import { NewsletterDetailComponent } from './components/masterdetail/newsletter-detail.component';
import { CampaignComponent } from './components/masterdetail/campaign.component';


// import {SearchGrid} from './components/searchgrid/searchgrid';
// import { DashboardComponent } from './components/heroes/dashboard.component';
// import { HeroesComponent } from './components/heroes/heroes.component';
// import { HeroDetailComponent } from './components/heroes/hero-detail.component';
// import { HeroService } from './components/heroes/hero.service';
//

@Component({
  selector: 'my-app',
  templateUrl: './app/templates/nav.component.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS, NewsletterService]
})

@RouteConfig([
  { path: '/', name: 'Home', component: Home, useAsDefault: true },
  { path: '/basic', name: 'Basic', component: Basic },
  { path: '/newsletters', name: 'Newsletters', component: Newsletters },
  // { path: '/searchgrid', name: 'SearchGrid', component: SearchGrid },
  { path: '/newsletters/:id', name: 'NewslettersDetail', component: NewsletterDetailComponent },
  { path: '/campaign', name: 'Campaign', component: CampaignComponent },
  { path: '/ts', name: 'Athelete', component: Athelete }

])

export class AppComponent {


}
