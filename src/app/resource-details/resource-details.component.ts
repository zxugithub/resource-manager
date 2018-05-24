import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Resource } from '../shared/resource';

@Component({
  selector: 'rcm-resource-details',
  templateUrl: './resource-details.component.html',
  styleUrls: ['./resource-details.component.scss']
})
export class ResourceDetailsComponent implements OnInit, OnDestroy {

  id: number;
  private sub: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      console.log(this.id);    
    });        
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }  
}
