import { Component } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  cards = [
    {
     image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj9yVKayNJIMlyIzPamY6wWWia4sbU7ffONA&usqp=CAU',
      title:'Add details of your property',
      para:'Begin by telling us the few basic details about your property like your property type, location,No. of rooms etc'
    },
    {
     image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTifgv1oAHi9L5J6yeZfXy7MElOIT3XadpdGw&usqp=CAU',
      title:'Upload Photos & Videos',
      para:'Upload photos and videos of your property either via desktop or from your mobile phone'
    },
    {
     image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBbh2LmH-ATQUuAYM-m0aLR0oV2v4nb-wI7A&usqp=CAU',
      title:'Add Pricing & Ownership',
      para:'Just update your property ownership details and your expected price and your property is ready for posting'
    },
  ]
  
}
