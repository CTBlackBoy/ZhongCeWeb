import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserIndex {
  constructor(public http: HttpClient) {
  }
  getIndex() {
    return this.http.get('http://127.0.0.1:5000/');
  }
  // getCustomer() {
  //   let params = {...};
  //   return this.http.post('apiurl', params);
  // }
}
