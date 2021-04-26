import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailytransactionComponent } from './dailytransaction.component';

describe('DailytransactionComponent', () => {
  let component: DailytransactionComponent;
  let fixture: ComponentFixture<DailytransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailytransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailytransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
