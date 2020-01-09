import { Injectable } from '@angular/core';
import { InitialService } from './initial.service';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class HttpService {

  constructor(private http: HttpClient, private initialService: InitialService) { }

  get() {
    this.http.get(this.initialService.getHost()).subscribe(data => {
      console.log(data);
    });
  }

}
