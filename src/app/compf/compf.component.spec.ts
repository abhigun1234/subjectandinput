import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompfComponent } from './compf.component';

describe('CompfComponent', () => {
  let component: CompfComponent;
  let fixture: ComponentFixture<CompfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
