import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviaDetailComponent } from './movia-detail.component';

describe('MoviaDetailComponent', () => {
  let component: MoviaDetailComponent;
  let fixture: ComponentFixture<MoviaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
