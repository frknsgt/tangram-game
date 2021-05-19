import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionScreenComponent } from './selection-screen.component';

describe('SelectionScreenComponent', () => {
  let component: SelectionScreenComponent;
  let fixture: ComponentFixture<SelectionScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectionScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
