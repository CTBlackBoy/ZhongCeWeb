import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserArticle {
  constructor(public http: HttpClient) {
  }
  getArticle() {
    return this.http.get('http://127.0.0.1:5000/Article');
  }
  // getCustomer() {
  //   let params = {...};
  //   return this.http.post('apiurl', params);
  // }
}
