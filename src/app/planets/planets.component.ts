import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../services/http.service';


@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {

  constructor(private http: HttpClient, private httpService: HttpService) { }

  ngOnInit() {
    this.showData();
    console.log("oninit works");
    
  }

  showData() {
    this.httpService.get();
  }

}
