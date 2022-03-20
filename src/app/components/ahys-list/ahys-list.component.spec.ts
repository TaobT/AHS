import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AhysListComponent } from './ahys-list.component';

describe('AhysListComponent', () => {
  let component: AhysListComponent;
  let fixture: ComponentFixture<AhysListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AhysListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AhysListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
