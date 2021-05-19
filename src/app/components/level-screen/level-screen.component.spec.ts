import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelScreenComponent } from './level-screen.component';

describe('LevelScreenComponent', () => {
  let component: LevelScreenComponent;
  let fixture: ComponentFixture<LevelScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LevelScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
