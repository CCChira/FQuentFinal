import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Lostpass3Page } from './lostpass3.page';

describe('Lostpass3Page', () => {
  let component: Lostpass3Page;
  let fixture: ComponentFixture<Lostpass3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lostpass3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA], })
    .compileComponents(); } ) );

  beforeEach(() => {
    fixture = TestBed.createComponent(Lostpass3Page);
    component = fixture.componentInstance;
    fixture.detectChanges(); } );

  it('should create', () => {
    expect(component).toBeTruthy(); } );
} );
