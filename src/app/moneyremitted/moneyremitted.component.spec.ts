import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyremittedComponent } from './moneyremitted.component';

describe('MoneyremittedComponent', () => {
  let component: MoneyremittedComponent;
  let fixture: ComponentFixture<MoneyremittedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoneyremittedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneyremittedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
