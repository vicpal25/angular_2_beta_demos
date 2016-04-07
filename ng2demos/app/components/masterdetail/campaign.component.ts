import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { Newsletter } from './newsletter';
import { NewsletterDetailComponent } from './newsletter-detail.component';
import { NewsletterService } from './newsletter.service';

@Component({
  selector: 'newsletters',
  templateUrl: './app/templates/campaign.component.html',
  styleUrls:  ['./app/templates/campaign.component.css'],
  directives: [NewsletterDetailComponent]
})
export class CampaignComponent implements OnInit {
  newsletters: Newsletter[];
  selectedNewsletter: Newsletter;

  constructor(
    private _router: Router,
    private _newsletterService: NewsletterService) { }

  getNewsletters() {
    this._newsletterService.getNewsletters().then(newsletters => this.newsletters = newsletters);
  }

  ngOnInit() {
    this.getNewsletters();
  }

  onSelect(newsletter: Newsletter) { this.selectedNewsletter = newsletter; }

  gotoDetail() {
    this._router.navigate(['NewslettersDetail', { id: this.selectedNewsletter.id }]);
  }
}
