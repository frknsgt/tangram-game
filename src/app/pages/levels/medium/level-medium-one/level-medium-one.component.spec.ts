import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelMediumOneComponent } from './level-medium-one.component';

describe('LevelMediumOneComponent', () => {
  let component: LevelMediumOneComponent;
  let fixture: ComponentFixture<LevelMediumOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LevelMediumOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelMediumOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
