import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRelativeComponent } from './add-relative.component';

describe('AddRelativeComponent', () => {
  let component: AddRelativeComponent;
  let fixture: ComponentFixture<AddRelativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRelativeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRelativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
