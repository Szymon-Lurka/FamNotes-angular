import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePageHasGroupComponent } from './create-page-has-group.component';

describe('CreatePageHasGroupComponent', () => {
  let component: CreatePageHasGroupComponent;
  let fixture: ComponentFixture<CreatePageHasGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePageHasGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePageHasGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
