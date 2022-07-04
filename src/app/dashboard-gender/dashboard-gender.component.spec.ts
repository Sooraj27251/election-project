import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardGenderComponent } from './dashboard-gender.component';

describe('DashboardGenderComponent', () => {
  let component: DashboardGenderComponent;
  let fixture: ComponentFixture<DashboardGenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardGenderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardGenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
