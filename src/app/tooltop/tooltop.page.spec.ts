import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TooltopPage } from './tooltop.page';

describe('TooltopPage', () => {
  let component: TooltopPage;
  let fixture: ComponentFixture<TooltopPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TooltopPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA], })
    .compileComponents(); } ) );

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltopPage);
    component = fixture.componentInstance;
    fixture.detectChanges(); } );

  it('should create', () => {
    expect(component).toBeTruthy(); } );
} );
