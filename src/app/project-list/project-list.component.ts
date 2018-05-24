import { Component, NgZone, OnInit } from '@angular/core';
import { DataTablesModule, DataTableDirective } from 'angular-datatables';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service';
import { DataService } from '../shared/data.service';
import { Observer } from 'rxjs/Observer';
import { Observable } from 'rxjs/observable';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'rcm-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
  message = '';
  
  ListData: any = [];

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(private zone: NgZone, private api: ApiService, private router: Router) { }

  someClickHandler(info: any): void {
    this.router.navigate(['/editProject', info.id]);
//    this.message = info.id + ' - ' + info.firstName;
  }
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,    
      columns: [{
        title: 'ID',
        data: 'Id'
      }, {
        title: 'Project Name',
        data: 'Name'
      }, {
        title: 'Description',
        data: 'Description'
      }, {
        title: 'Total Budget',
        data: 'TotalBudget'
      }, {
        title: 'Start Date',
        data: 'StartDate'
      }, {
        title: 'End Date',
        data: 'EndDate'
      }, {
        title: 'Remaining Budget',
        data: 'RemainingBudget'
      }, {
        title: 'Ms Name',
        data: 'MsName'
      }, {
        title: 'Ms Number',
        data: 'MsNumber'
      }, {
        title: 'Portfolio',
        data: 'Portfolio'
      }, {
        title: 'Status',
        data: 'Status'
      }, {
        title: 'Comment',
        data: 'Comment'
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
    this.api.get("projects").subscribe( result => {
      this.ListData = result;
      this.dtTrigger.next();
    });
  }
}
