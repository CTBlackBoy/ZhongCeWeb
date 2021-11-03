import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponet } from './Main.component';

describe('IndexComponent', () => {
  let component: MainComponet;
  let fixture: ComponentFixture<MainComponet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainComponet ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponet);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
