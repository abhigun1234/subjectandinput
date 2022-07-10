import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompGComponent } from './comp-g.component';

describe('CompGComponent', () => {
  let component: CompGComponent;
  let fixture: ComponentFixture<CompGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
