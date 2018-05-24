import { Component, NgZone, OnInit } from '@angular/core';
import { DataTablesModule, DataTableDirective } from 'angular-datatables';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service';
import { DataService } from '../shared/data.service';
import { Observer } from 'rxjs/Observer';
import { Observable } from 'rxjs/observable';
import { Subject } from 'rxjs/Subject';
//import { Client } from '_debugger';

@Component({
  selector: 'rcm-resource-list',
  templateUrl: 'resource-list.component.html',
  styleUrls: ['./resource-list.component.scss']
})
export class ResourceListComponent implements OnInit {
  message = '';
  
  ListData: any = [];

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(private zone: NgZone, private api: ApiService, private router: Router) { }

  someClickHandler(info: any): void {
    this.router.navigate(['/editResource', info.id]);
//    this.message = info.id + ' - ' + info.firstName;
  }
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      columns: [{
        title: 'ID',
        data: 'id'
      }, {
        title: 'First name',
        data: 'firstName'
      }, {
        title: 'Last name',
        data: 'lastName'
      }, {
        title: 'Rate',
        data: 'rate'
      }, {
        title: 'Manager ID',
        data: 'managerId'
      }, {
        title: 'Department',
        data: 'department'
      }, {
        title: 'Resource Type',
        data: 'resourceType'
      }, {
        title: 'Hire Date',
        data: 'hireDate'
      }, {
        title: 'End Date',
        data: 'endDate'
      }, {
        title: 'Comment',
        data: 'comment'
      }],
           
      rowCallback: (row: Node, data: any[] | Object, index: number) => {
        const self = this;
        // Unbind first in order to avoid any duplicate handler
        // (see https://github.com/l-lin/angular-datatables/issues/87)
        $('td', row).unbind('click');
        $('td', row).bind('click', () => {
          self.someClickHandler(data);
        });
        return row;
      }
    }
    this.api.get("resources").subscribe( result => {
      this.ListData = result;
      this.dtTrigger.next();
    });
  }
}
