import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripListElementComponent } from './trip-list-element.component';

describe('TripListElementComponent', () => {
  let component: TripListElementComponent;
  let fixture: ComponentFixture<TripListElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripListElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripListElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
