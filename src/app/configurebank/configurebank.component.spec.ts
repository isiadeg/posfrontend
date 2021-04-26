import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurebankComponent } from './configurebank.component';

describe('ConfigurebankComponent', () => {
  let component: ConfigurebankComponent;
  let fixture: ComponentFixture<ConfigurebankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigurebankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurebankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
