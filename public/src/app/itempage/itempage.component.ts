import { Component, OnInit } from '@angular/core';
import { Activated}
import { CryptService } from '../crypt.service'

@Component({
  selector: 'app-itempage',
  templateUrl: './itempage.component.html',
  styleUrls: ['./itempage.component.css']
})
export class ItempageComponent implements OnInit {
  listing: any;
  constructor(private _cryptService: CryptService) { }

  ngOnInit() {

    this.getonelisting(id);
  }

  getonelistings(id){
    //  Our http Response is an observable, store it in the variable tempObservable
    let listings = this._cryptService.getonelistings(id);
    // subscribe to our observable and provide the code we would like to do with our data from the response
    listings.subscribe(data => {
      console.log("got the listing!", data) 
      this.listing = data['_listing'];
      console.log(this.listing);
    });

}

}
