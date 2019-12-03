import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlusproduitComponent } from './plusproduit.component';

describe('PlusproduitComponent', () => {
  let component: PlusproduitComponent;
  let fixture: ComponentFixture<PlusproduitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlusproduitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlusproduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
