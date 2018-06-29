import { Component, OnInit } from '@angular/core';
import { CryptService } from '../crypt.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
listing: any;
alisting: any;
  constructor(private _cryptService: CryptService) { }

  ngOnInit() {
    this.getlistings();
    this.getauction();
  }
  getauction(){
    //  Our http Response is an observable, store it in the variable tempObservable
    let auctions = this._cryptService.getauction();
    // subscribe to our observable and provide the code we would like to do with our data from the response
    auctions.subscribe(data => {
      console.log("got the auction listings!", data) 
      this.alisting = data['_listing'];
      console.log(this.alisting);
    });

}

  getlistings(){
            //  Our http Response is an observable, store it in the variable tempObservable
            let listings = this._cryptService.getlistings();
            // subscribe to our observable and provide the code we would like to do with our data from the response
            listings.subscribe(data => {
              console.log("got the listings!", data) 
              this.listing = data['_listing'];
              console.log(this.listing);
            });

  }

}
