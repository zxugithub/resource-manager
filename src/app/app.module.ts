import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { HighlightJsModule, HighlightJsService } from 'angular2-highlight-js';
//import { MatMenuModule } from '@angular/material/menu';
//import { MatButtonModule } from "@angular/material/button";
//import { MatIconModule } from "@angular/material/icon";
//import {MatSidenavModule} from '@angular/material/sidenav';
//import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { ApiService } from './shared/api.service';
import { AuthService } from './shared/auth.service';
import { AuthGuard } from './auth.guard';
import { ResourceListComponent } from './resource-list/resource-list.component';
import { DataService } from './shared/data.service';
import { ResourceDetailsComponent } from './resource-details/resource-details.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { AllocatingComponent } from './allocating/allocating.component';
import { AllocationByResourceComponent } from './allocation-by-resource/allocation-by-resource.component';
//import { DataTablesModule } from 'datatables';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    ResourceListComponent,
    ResourceDetailsComponent,
    ProjectListComponent,
    AllocatingComponent,
    AllocationByResourceComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    DataTablesModule,
    FormsModule,
    MatGridListModule,
    HighlightJsModule,
    MatListModule
//    BrowserAnimationsModule
//    MatMenuModule,
//    MatButtonModule,
//    MatIconModule,
//    MatSidenavModule  
  ],
  providers: [HighlightJsService, HttpClientModule, ApiService, AuthService, DataService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
