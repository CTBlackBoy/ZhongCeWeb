import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserTestin {
  constructor(public http: HttpClient) {
  }
  getTestin() {
    return this.http.get('http://127.0.0.1:5000/Testin');
  }
  // getCustomer() {
  //   let params = {...};
  //   return this.http.post('apiurl', params);
  // }
}
