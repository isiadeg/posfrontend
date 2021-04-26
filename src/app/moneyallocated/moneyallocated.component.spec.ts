import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyallocatedComponent } from './moneyallocated.component';

describe('MoneyallocatedComponent', () => {
  let component: MoneyallocatedComponent;
  let fixture: ComponentFixture<MoneyallocatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoneyallocatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneyallocatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
