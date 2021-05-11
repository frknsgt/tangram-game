import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelHardOneComponent } from './level-hard-one.component';

describe('LevelHardOneComponent', () => {
  let component: LevelHardOneComponent;
  let fixture: ComponentFixture<LevelHardOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LevelHardOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelHardOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
