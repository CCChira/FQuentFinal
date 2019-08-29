import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Lostpass1Page } from './lostpass1.page';

describe('Lostpass1Page', () => {
  let component: Lostpass1Page;
  let fixture: ComponentFixture<Lostpass1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lostpass1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents(); }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lostpass1Page);
    component = fixture.componentInstance;
    fixture.detectChanges(); });

  it('should create', () => {
    expect(component).toBeTruthy(); });
} );
