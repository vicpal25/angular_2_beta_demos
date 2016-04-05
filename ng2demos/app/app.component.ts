import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from 'angular2/router'

//import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig} from 'angular2/router';

import {Home} from './components/home/home.component'
import {Basic} from './components/basic/basic.component';
import {Newsletters} from './components/newsletters/newsletters.component';
import {SearchGrid} from './components/searchgrid/searchgrid';
import { DashboardComponent } from './components/heroes/dashboard.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroDetailComponent } from './components/heroes/hero-detail.component';
import { HeroService } from './components/heroes/hero.service';

import { CampaignComponent } from './components/masterdetail/campaign.component';
import { NewsletterDetailComponent } from './components/masterdetail/newsletter-detail.component';
import { NewsletterService } from './components/masterdetail/newsletter.service';

@Component({
  selector: 'my-app',
  template: `
         <nav class="navbar navbar-inverse navbar-fixed-top">
            <div class="container">
                <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" [routerLink]="['Home']">ANGULAR 2 APP</a>
                </div>
                <div id="navbar" class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <li class="active"><a [routerLink]="['Home']">Home</a></li>
                    <li><a [routerLink]="['Basic']">Basic</a></li>
                    <li><a [routerLink]="['Newsletters']">Newsletters</a></li>
                    <li><a [routerLink]="['SearchGrid']">SearchGrid</a></li>
                    <li><a [routerLink]="['Dashboard']">Dashboard</a></li>
                    <li><a [routerLink]="['Heroes']">Heroes</a></li>
                    <li><a [routerLink]="['Campaign']">Campaign</a></li>
                </ul>
                </div>
            </div>
        </nav>
        <div class="container">
            <div class="starter-template">
                <router-outlet></router-outlet>
            </div>
        </div>
    `,
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS, HeroService, NewsletterService]
})

@RouteConfig([
  { path: '/', name: 'Home', component: Home },
  { path: '/basic', name: 'Basic', component: Basic },
  { path: '/newsletters', name: 'Newsletters', component: Newsletters },
  { path: '/searchgrid', name: 'SearchGrid', component: SearchGrid },
  { path: '/dashboard', name: 'Dashboard', component: DashboardComponent, useAsDefault: true },
  { path: '/detail/:id', name: 'HeroDetail', component: HeroDetailComponent },
  { path: '/heroes', name: 'Heroes', component: HeroesComponent },
  { path: '/newsletters/:id', name: 'NewslettersDetail', component: NewsletterDetailComponent },
  { path: '/campaign', name: 'Campaign', component: CampaignComponent }


])

export class AppComponent { }
