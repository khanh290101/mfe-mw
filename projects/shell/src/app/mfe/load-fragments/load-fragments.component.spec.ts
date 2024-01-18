import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadFragmentsComponent } from './load-fragments.component';

describe('LoadFragmentsComponent', () => {
  let component: LoadFragmentsComponent;
  let fixture: ComponentFixture<LoadFragmentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoadFragmentsComponent]
    });
    fixture = TestBed.createComponent(LoadFragmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
