import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllocatingComponent } from './allocating.component';

describe('AllocatingComponent', () => {
  let component: AllocatingComponent;
  let fixture: ComponentFixture<AllocatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllocatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllocatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
