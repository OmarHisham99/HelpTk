import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurNewsComponent } from './our-news.component';

describe('OurNewsComponent', () => {
  let component: OurNewsComponent;
  let fixture: ComponentFixture<OurNewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurNewsComponent]
    });
    fixture = TestBed.createComponent(OurNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
