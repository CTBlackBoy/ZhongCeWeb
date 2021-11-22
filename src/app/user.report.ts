import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserReport {
  constructor(public http: HttpClient) {
  }
  getReport() {
    return this.http.get('http://127.0.0.1:5000/Report');
  }
  // getCustomer() {
  //   let params = {...};
  //   return this.http.post('apiurl', params);
  // }
}
