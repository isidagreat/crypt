import { Component, OnInit } from '@angular/core';
import { CryptService } from '../crypt.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-createauction',
  templateUrl: './createauction.component.html',
  styleUrls: ['./createauction.component.css']
})
export class CreateauctionComponent implements OnInit {
  listing: any;
  errors: any;
  constructor(private _cryptService: CryptService) { }

  ngOnInit() {
  }
  onSubmit(myForm: NgForm){
    this.listing = myForm.value;
    let observable = this._cryptService.addauction(this.listing);
    observable.subscribe(data=> {
      if(data['error']){
        console.log(data['error'])
        this.errors = data['error'];
      }
      else{
      console.log("got data from the post Back", data);
      this.listing = {title:"", description:""}
      }
    })
  }

}
