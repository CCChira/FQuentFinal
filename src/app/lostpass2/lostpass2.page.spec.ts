import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Lostpass2Page } from './lostpass2.page';

describe('Lostpass2Page', () => {
  let component: Lostpass2Page;
  let fixture: ComponentFixture<Lostpass2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lostpass2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA], })
    .compileComponents(); } ) );

  beforeEach(() => {
    fixture = TestBed.createComponent(Lostpass2Page);
    component = fixture.componentInstance;
    fixture.detectChanges(); } );

  it('should create', () => {
    expect(component).toBeTruthy(); } );
} );
