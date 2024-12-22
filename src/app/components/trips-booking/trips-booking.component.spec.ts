import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripsBookingComponent } from './trips-booking.component';

describe('TripsBookingComponent', () => {
  let component: TripsBookingComponent;
  let fixture: ComponentFixture<TripsBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TripsBookingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TripsBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
