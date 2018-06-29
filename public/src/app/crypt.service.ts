import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CryptService {

  constructor(private _http: HttpClient) { }

  addlisting(listing){
    return this._http.post('/api/new/listing', listing);
  }
  addauction(listing){
    return this._http.post('/api/new/auction', listing);
  }
  getlistings(){
    return this._http.get('/api/listings');
  }
  getonelistings(id){
    return this._http.get('/api/listing/'+id['id']);
  }

}
