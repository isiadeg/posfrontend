import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendordailyComponent } from './vendordaily.component';

describe('VendordailyComponent', () => {
  let component: VendordailyComponent;
  let fixture: ComponentFixture<VendordailyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendordailyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendordailyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
