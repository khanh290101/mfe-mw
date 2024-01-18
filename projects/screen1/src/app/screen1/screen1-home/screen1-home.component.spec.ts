import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Screen1HomeComponent } from './screen1-home.component';

describe('Screen1HomeComponent', () => {
  let component: Screen1HomeComponent;
  let fixture: ComponentFixture<Screen1HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Screen1HomeComponent]
    });
    fixture = TestBed.createComponent(Screen1HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
