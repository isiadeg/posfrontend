import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdepositComponent } from './editdeposit.component';

describe('EditdepositComponent', () => {
  let component: EditdepositComponent;
  let fixture: ComponentFixture<EditdepositComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditdepositComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditdepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
