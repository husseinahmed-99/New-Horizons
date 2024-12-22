import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportationBookingComponent } from './transportation-booking.component';

describe('TransportationBookingComponent', () => {
  let component: TransportationBookingComponent;
  let fixture: ComponentFixture<TransportationBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransportationBookingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransportationBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
