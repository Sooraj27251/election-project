import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCasteComponent } from './dashboard-caste.component';

describe('DashboardCasteComponent', () => {
  let component: DashboardCasteComponent;
  let fixture: ComponentFixture<DashboardCasteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardCasteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardCasteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
