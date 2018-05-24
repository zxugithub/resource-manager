import { Injectable } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';



@Injectable()
export class DataService {

  constructor(private api: ApiService) { }

  loadData() {
    return this.api.get("api/resources")
  }

}
