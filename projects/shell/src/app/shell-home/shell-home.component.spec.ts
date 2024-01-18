import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellHomeComponent } from './shell-home.component';

describe('ShellHomeComponent', () => {
  let component: ShellHomeComponent;
  let fixture: ComponentFixture<ShellHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShellHomeComponent]
    });
    fixture = TestBed.createComponent(ShellHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
