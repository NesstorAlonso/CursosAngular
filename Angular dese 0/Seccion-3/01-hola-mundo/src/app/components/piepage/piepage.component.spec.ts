import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiepageComponent } from './piepage.component';

describe('PiepageComponent', () => {
  let component: PiepageComponent;
  let fixture: ComponentFixture<PiepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
