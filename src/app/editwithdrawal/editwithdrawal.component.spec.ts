import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditwithdrawalComponent } from './editwithdrawal.component';

describe('EditwithdrawalComponent', () => {
  let component: EditwithdrawalComponent;
  let fixture: ComponentFixture<EditwithdrawalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditwithdrawalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditwithdrawalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
