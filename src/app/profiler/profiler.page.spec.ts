import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfilerPage } from './profiler.page';

describe('ProfilerPage', () => {
  let component: ProfilerPage;
  let fixture: ComponentFixture<ProfilerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA], })
    .compileComponents(); } ) );

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilerPage);
    component = fixture.componentInstance;
    fixture.detectChanges(); } );

  it('should create', () => {
    expect(component).toBeTruthy(); } );
} );
