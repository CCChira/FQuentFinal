import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewObjectPage } from './add-new-object.page';

describe('AddNewObjectPage', () => {
  let component: AddNewObjectPage;
  let fixture: ComponentFixture<AddNewObjectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewObjectPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewObjectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
