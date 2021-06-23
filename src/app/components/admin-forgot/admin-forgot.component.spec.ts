import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminForgotComponent } from './admin-forgot.component';

describe('AdminForgotComponent', () => {
  let component: AdminForgotComponent;
  let fixture: ComponentFixture<AdminForgotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminForgotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminForgotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
