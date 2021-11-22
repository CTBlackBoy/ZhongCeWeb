import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserInformation {
  constructor(public http: HttpClient) {
  }
  getInformation() {
    return this.http.get('http://127.0.0.1:5000/Information');
  }
  // getCustomer() {
  //   let params = {...};
  //   return this.http.post('apiurl', params);
  // }
}
