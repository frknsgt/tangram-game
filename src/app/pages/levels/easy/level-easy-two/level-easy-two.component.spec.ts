import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelEasyTwoComponent } from './level-easy-two.component';

describe('LevelEasyTwoComponent', () => {
  let component: LevelEasyTwoComponent;
  let fixture: ComponentFixture<LevelEasyTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LevelEasyTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelEasyTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
