import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmsnComponent } from './admsn.component';

describe('AdmsnComponent', () => {
  let component: AdmsnComponent;
  let fixture: ComponentFixture<AdmsnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmsnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmsnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
