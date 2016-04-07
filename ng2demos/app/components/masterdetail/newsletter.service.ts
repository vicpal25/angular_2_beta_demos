import { Injectable } from 'angular2/core';

import { Newsletter } from './newsletter';
import { CAMPAIGNS } from './mock-campaigns';

@Injectable()
export class NewsletterService {
  getNewsletters() {
    return Promise.resolve(CAMPAIGNS);
  }

  getNewslettersSlowly() {
    return new Promise<Newsletter[]>(resolve =>
      setTimeout(()=>resolve(CAMPAIGNS), 2000) // 2 seconds
    );
  }

  getNewsletter(id: number) {
    return Promise.resolve(CAMPAIGNS).then(
      newsletters => newsletters.filter(newsletter => newsletter.id === id)[0]
    );
  }
}
