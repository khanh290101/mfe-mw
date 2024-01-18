import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Screen2HomeComponent } from './screen2-home.component';

describe('Screen2HomeComponent', () => {
  let component: Screen2HomeComponent;
  let fixture: ComponentFixture<Screen2HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Screen2HomeComponent]
    });
    fixture = TestBed.createComponent(Screen2HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
