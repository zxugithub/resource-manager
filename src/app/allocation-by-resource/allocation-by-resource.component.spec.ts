import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllocationByResourceComponent } from './allocation-by-resource.component';

describe('AllocationByResourceComponent', () => {
  let component: AllocationByResourceComponent;
  let fixture: ComponentFixture<AllocationByResourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllocationByResourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllocationByResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
