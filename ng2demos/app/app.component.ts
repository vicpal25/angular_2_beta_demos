import {Component} from 'angular2/core'
import {RouteConfig, ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from 'angular2/router'

import {Home} from './components/home/home.component'
import {Basic} from './components/basic/basic.component';
import {Newsletters} from './components/newsletters/newsletters.component';

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
    providers: [ROUTER_PROVIDERS]
})

@RouteConfig([
  { path:'/',            name: 'Home',       component: Home },
  { path:'/basic',     name: 'Basic',    component: Basic },
  { path:'/newsletters',     name: 'Newsletters',    component: Newsletters }
])

export class AppComponent { }
