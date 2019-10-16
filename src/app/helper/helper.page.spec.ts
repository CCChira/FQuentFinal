import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HelperPage } from './helper.page';

describe('HelperPage', () => {
  let component: HelperPage;
  let fixture: ComponentFixture<HelperPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelperPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA], })
    .compileComponents(); } ) );

  beforeEach(() => {
    fixture = TestBed.createComponent(HelperPage);
    component = fixture.componentInstance;
    fixture.detectChanges(); } );

  it('should create', () => {
    expect(component).toBeTruthy(); } );
} );
