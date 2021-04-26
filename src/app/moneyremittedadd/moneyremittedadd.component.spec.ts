import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyremittedaddComponent } from './moneyremittedadd.component';

describe('MoneyremittedaddComponent', () => {
  let component: MoneyremittedaddComponent;
  let fixture: ComponentFixture<MoneyremittedaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoneyremittedaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneyremittedaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
