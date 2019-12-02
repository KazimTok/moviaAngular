import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovialistComponent } from './movialist.component';

describe('MovialistComponent', () => {
  let component: MovialistComponent;
  let fixture: ComponentFixture<MovialistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovialistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovialistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
