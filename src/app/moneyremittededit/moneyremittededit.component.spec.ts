import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyremittededitComponent } from './moneyremittededit.component';

describe('MoneyremittededitComponent', () => {
  let component: MoneyremittededitComponent;
  let fixture: ComponentFixture<MoneyremittededitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoneyremittededitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneyremittededitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
