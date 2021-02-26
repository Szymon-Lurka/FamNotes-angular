import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePageHasNoGroupComponent } from './create-page-has-no-group.component';

describe('CreatePageHasNoGroupComponent', () => {
  let component: CreatePageHasNoGroupComponent;
  let fixture: ComponentFixture<CreatePageHasNoGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePageHasNoGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePageHasNoGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
