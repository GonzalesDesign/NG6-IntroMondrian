import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopDialogComponent } from './pop-dialog.component';

describe('PopDialogComponent', () => {
  let component: PopDialogComponent;
  let fixture: ComponentFixture<PopDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
