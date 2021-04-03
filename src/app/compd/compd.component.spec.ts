import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompdComponent } from './compd.component';

describe('CompdComponent', () => {
  let component: CompdComponent;
  let fixture: ComponentFixture<CompdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
