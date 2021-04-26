import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyallocatedaddComponent } from './moneyallocatedadd.component';

describe('MoneyallocatedaddComponent', () => {
  let component: MoneyallocatedaddComponent;
  let fixture: ComponentFixture<MoneyallocatedaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoneyallocatedaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneyallocatedaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
