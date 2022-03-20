import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInputdataComponent } from './add-inputdata.component';

describe('AddInputdataComponent', () => {
  let component: AddInputdataComponent;
  let fixture: ComponentFixture<AddInputdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddInputdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInputdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
