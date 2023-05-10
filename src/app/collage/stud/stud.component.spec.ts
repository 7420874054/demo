import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudComponent } from './stud.component';

describe('StudComponent', () => {
  let component: StudComponent;
  let fixture: ComponentFixture<StudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
