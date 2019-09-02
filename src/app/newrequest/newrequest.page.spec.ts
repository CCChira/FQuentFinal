import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NewrequestPage } from './newrequest.page';

describe('NewrequestPage', () => {
  let component: NewrequestPage;
  let fixture: ComponentFixture<NewrequestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewrequestPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA], })
    .compileComponents(); } ) );

  beforeEach(() => {
    fixture = TestBed.createComponent(NewrequestPage);
    component = fixture.componentInstance;
    fixture.detectChanges(); } );

  it('should create', () => {
    expect(component).toBeTruthy(); } );
} );
