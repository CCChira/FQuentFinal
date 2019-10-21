import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharemapPage } from './sharemap.page';

describe('SharemapPage', () => {
  let component: SharemapPage;
  let fixture: ComponentFixture<SharemapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharemapPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharemapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
