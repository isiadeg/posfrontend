import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendortransactionsComponent } from './vendortransactions.component';

describe('VendortransactionsComponent', () => {
  let component: VendortransactionsComponent;
  let fixture: ComponentFixture<VendortransactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendortransactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendortransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
