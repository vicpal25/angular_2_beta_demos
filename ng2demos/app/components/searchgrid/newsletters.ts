import {Injectable} from "angular2/core";

@Injectable()
export class NewsletterService {
    newsletters = [
      {newsletter:'South Sentinel Midday Report',status:'Production',newsleterid:2089098223},
      {newsletter:'Los Angeles Times Breaking News',status:'Test',newsleterid:2089098022},
      {newsletter:'South Florida Local Hollywood',status:'Production',newsleterid:2089094504},
      {newsletter:'South Florida Travel Unraveled',status:'Test',newsleterid:2089098061}
    ];

}
