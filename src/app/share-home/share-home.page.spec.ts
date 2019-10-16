import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareHomePage } from './share-home.page';

describe('ShareHomePage', () => {
  let component: ShareHomePage;
  let fixture: ComponentFixture<ShareHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareHomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
