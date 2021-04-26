import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MychargesComponent } from './mycharges.component';

describe('MychargesComponent', () => {
  let component: MychargesComponent;
  let fixture: ComponentFixture<MychargesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MychargesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MychargesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
