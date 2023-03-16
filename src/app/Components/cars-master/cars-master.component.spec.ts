import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsMasterComponent } from './cars-master.component';

describe('CarsMasterComponent', () => {
  let component: CarsMasterComponent;
  let fixture: ComponentFixture<CarsMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarsMasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarsMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
