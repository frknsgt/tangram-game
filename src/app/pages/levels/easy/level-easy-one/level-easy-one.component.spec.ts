import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelEasyOneComponent } from './level-easy-one.component';

describe('LevelEasyOneComponent', () => {
  let component: LevelEasyOneComponent;
  let fixture: ComponentFixture<LevelEasyOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LevelEasyOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelEasyOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
