import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentarComponent } from './presentar.component';

describe('PresentarComponent', () => {
  let component: PresentarComponent;
  let fixture: ComponentFixture<PresentarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
