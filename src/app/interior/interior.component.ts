import { Component } from '@angular/core';

@Component({
  selector: 'app-interior',
  templateUrl: './interior.component.html',
  styleUrls: ['./interior.component.css']
})
export class InteriorComponent {
  cards = [
    {
      title: 'Our Services', 
      content:'Modular kitchens',
      content1:'Modular wardrobes',
      content2:'Lighting',
      content3:'Flooring',
      content4:'Electrical work',
      content5:'Civil work',
      content6:'False ceiling',
      content7:'Wall design & painting'
   },
    {
      title: 'Warranty', 
      content:'Flat 10-year warranty -dont stay worry - free with our warranty policy on modular products.',
      content1:'Up to 1-year on-site service warranty on on-site services such as painting, electrical, plumbing and more.',
   },
    {
      title: 'Price benefits', 
      content:'Price-match guarantee - Price match to a valid quote in comparison with a branded player and for exxact scope.',
      content1:'Flexible payment options - EMI solutions and payment schemes from leading financial partners',
      content2:'No hidden costs - Transparent costing without last-minute additions.'
   },
  
  ]

}
