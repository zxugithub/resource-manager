import { Component, OnInit } from '@angular/core';
import { Resource } from '../shared/resource';
import { Project } from '../shared/project';

@Component({
  selector: 'rcm-allocating',
  templateUrl: './allocating.component.html',
  styleUrls: ['./allocating.component.scss']
})
export class AllocatingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }

  onSubmit(allocateItem) {
    console.log(allocateItem);
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

    projects: Project[] = 
    [
      {   
        Id: 1,
        Name: "Service Pricing"
      },
      {   
        Id: 2,
        Name: "Group TFSA"
      },
      {   
        Id: 3,
        Name: "Personal Landing"
      },
      {   
        Id: 4,
        Name: "Slice"
      },
      {   
        Id: 5,
        Name: "Balance Transfer"
      },
      {   
        Id: 6,
        Name: "Business Credit Application"
      } ,
      {   
        Id: 7,
        Name: "Alpha Banking"
      },
      {   
        Id: 8,
        Name: "GIC Renewal and Purchase"
      }               
    ];
}
