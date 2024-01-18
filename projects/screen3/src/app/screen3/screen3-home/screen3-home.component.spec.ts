import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Screen3HomeComponent } from './screen3-home.component';

describe('Screen3HomeComponent', () => {
  let component: Screen3HomeComponent;
  let fixture: ComponentFixture<Screen3HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Screen3HomeComponent]
    });
    fixture = TestBed.createComponent(Screen3HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
