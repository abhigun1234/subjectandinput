import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompcComponent } from './compc.component';

describe('CompcComponent', () => {
  let component: CompcComponent;
  let fixture: ComponentFixture<CompcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
