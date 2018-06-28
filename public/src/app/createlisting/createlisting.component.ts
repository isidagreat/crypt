import { Component, OnInit } from '@angular/core';
import { CryptService } from '../crypt.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-createlisting',
  templateUrl: './createlisting.component.html',
  styleUrls: ['./createlisting.component.css']
})
export class CreatelistingComponent implements OnInit {

  constructor(private _cryptService: CryptService) { }
  listing: any;
  errors: any;
  ngOnInit() {
  }

  onSubmit(myForm: NgForm){
    this.listing = myForm.value;
    let observable = this._cryptService.addlisting(this.listing);
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
