import { Component, Input, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';

import { Newsletter } from './newsletter';
import { NewsletterService } from './newsletter.service';

@Component({
  selector: 'my-hero-detail',
  templateUrl: './app/templates/newsletter-detail.component.html',
  styleUrls: ['./app/templates/hero-detail.component.css']
})
export class NewsletterDetailComponent implements OnInit {

  @Input() newsletter: Newsletter;

  constructor(
    private _newsletterService: NewsletterService,
    private _routeParams: RouteParams) {
  }

  ngOnInit() {

    let id = +this._routeParams.get('id');



    this._newsletterService.getNewsletter(id)
      .then(newsletter => this.newsletter = newsletter);

  }

  goBack() {
    window.history.back();
  }
}
