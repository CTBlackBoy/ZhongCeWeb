import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestinComponent } from './Testin.component';

describe('TestinComponent', () => {
  let component: TestinComponent;
  let fixture: ComponentFixture<TestinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
