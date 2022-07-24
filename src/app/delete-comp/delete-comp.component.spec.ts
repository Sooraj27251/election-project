import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCompComponent } from './delete-comp.component';

describe('DeleteCompComponent', () => {
  let component: DeleteCompComponent;
  let fixture: ComponentFixture<DeleteCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
