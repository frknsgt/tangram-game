import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelManagementComponent } from './level-management.component';

describe('LevelManagementComponent', () => {
  let component: LevelManagementComponent;
  let fixture: ComponentFixture<LevelManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LevelManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
