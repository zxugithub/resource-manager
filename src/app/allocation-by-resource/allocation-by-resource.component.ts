import { Component, OnInit } from '@angular/core';
import { Resource } from '../shared/resource';
import { Project } from '../shared/project';

@Component({
  selector: 'rcm-allocation-by-resource',
  templateUrl: './allocation-by-resource.component.html',
  styleUrls: ['./allocation-by-resource.component.scss']
})
export class AllocationByResourceComponent implements OnInit {
  
  selectedResource: any;
  constructor() { }

  ngOnInit() {
    console.log(this.assignments[1].assigns.length);
  }

  onChange(deviceValue) {
    console.log(deviceValue);
    console.log(this.selectedResource);
  }

  resources: Resource[] = 
    [
      {   
        Id: 1,
        FirstName: "Dan",
        LastName: "Oliver"
      }, 
      {   
        Id: 2,
        FirstName: "Richard",
        LastName: "Li"
      },
      {   
        Id: 3,
        FirstName: "Sherif",
        LastName: "Ghonaim"
      },
      {   
        Id: 4,
        FirstName: "Zhiming",
        LastName: "Xu"
      }                
    ];

    monthYears: any [] =
    [
      {
        month: "Jan-2018"
      },
      {
        month: "Feb-2018"
      },
      {
        month: "Mar-2018"
      },
      {
        month: "Apr-2018"
      },
      {
        month: "May-2018"
      },
      {
        month: "Jun-2018"
      },
      {
        month: "Jul-2018"
      }      
    ];


    assignments: any [] =
    [ 
      {
      month: "Jan-2018", assigns: [
        { proj: "Service Pricing", assign: "20%"},
        { proj: "Group TFSA", assign: "25%" },
        { proj: "Balance Transfer", assign: "40%" },
        { proj: "US Credit Card Payment", assign: "15%"},
        { proj: "Total", assign: "100%"}
      ]},
      {month: "Feb-2018", assigns: [
        { proj: "Service Pricing", assign: "40%"},
        { proj: "Soleil", assign: "30%"},
        { proj: "Alpha Banking Integration", assign: "30%"},
        { proj: "Total", assign: "100%"}
      ]},
      {month: "Mar-2018",assigns: [
        { proj: "Client Appointment Booking", assign: "30%"},
        { proj: "US Credit Card Payment", assign: "30%"},
        { proj: "Alpha Banking Integration", assign: "30%"},
        { proj: "Soleil", assign:  "20%"},
        { proj: "Total", assign:  "110%"}        
      ]} 
    ];
}
