import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResourceListComponent } from './resource-list/resource-list.component';
import { ResourceDetailsComponent} from './resource-details/resource-details.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { AllocatingComponent } from './allocating/allocating.component';
import { AllocationByResourceComponent } from './allocation-by-resource/allocation-by-resource.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'resources',
    pathMatch: 'full'
  },
  {
    path: 'resources',
    component: ResourceListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'projects',
    component: ProjectListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'allocating',
    component: AllocatingComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'byresource',
    component: AllocationByResourceComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'new',
    component: ResourceDetailsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'editResource/:id',
    component: ResourceDetailsComponent,
    canActivate: [AuthGuard]
  },  
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    redirectTo: 'resources'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
