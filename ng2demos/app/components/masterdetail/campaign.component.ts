import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { Newsletter } from './newsletter';
import { NewsletterDetailComponent } from './newsletter-detail.component';
import { NewsletterService } from './newsletter.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './app/templates/newsletters.component.html',
  styleUrls:  ['./app/templates/heroes.component.css'],
  directives: [NewsletterDetailComponent]
})
export class CampaignComponent implements OnInit {
  newsletters: Newsletter[];
  selectedNewsletter: Newsletter;

  constructor(
    private _router: Router,
    private _newsletterService: NewsletterService) { }

  getHeroes() {
    this._newsletterService.getNewsletters().then(newsletters => this.newsletters = newsletters);
  }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(newsletter: Newsletter) { this.selectedNewsletter = newsletter; }

  gotoDetail() {
    this._router.navigate(['NewsletterDetailComponent', { id: this.selectedNewsletter.id }]);
  }
}
