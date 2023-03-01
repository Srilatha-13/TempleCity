import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
    
    location:boolean = false;
    amenities:boolean = false;
    support:boolean = false;
    project:boolean = false;
    locationfu(){
      this.location= true;
      this.amenities = false;
      this.support = false;
      this.project = false;
    }
    amenitiesfu(){
      this.location= false;
      this.amenities = true;
      this.support = false;
      this.project = false;
    }
    specificationsfu(){
      this.location= false;
      this.amenities = false;
      this.support = true;
      this.project = false;
    }
    projectfu(){
      this.location= false;
      this.amenities = false;
      this.support = false;
      this.project = true;
    }
    popup : boolean = false;
    popup1:boolean = false;
    popup2:boolean = false;
    popup1fu(){
      this.popup = true;
      this.popup1 = true;
      this.popup2 = false;
    }
    popup2fu(){
      this.popup = true;
      this.popup1 = false;
      this.popup2 = true;
    }
}
