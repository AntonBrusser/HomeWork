import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrisonComponent } from './prison.component';

describe('PrisonComponent', () => {
  let component: PrisonComponent;
  let fixture: ComponentFixture<PrisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
