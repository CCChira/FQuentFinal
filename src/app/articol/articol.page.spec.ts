import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ArticolPage } from './articol.page';

describe('ArticolPage', () => {
  let component: ArticolPage;
  let fixture: ComponentFixture<ArticolPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticolPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA], })
    .compileComponents(); } ) );

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticolPage);
    component = fixture.componentInstance;
    fixture.detectChanges(); } );

  it('should create', () => {
    expect(component).toBeTruthy(); } );
} );
