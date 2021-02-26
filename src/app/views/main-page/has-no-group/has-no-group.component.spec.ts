import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HasNoGroupComponent } from './has-no-group.component';

describe('HasNoGroupComponent', () => {
  let component: HasNoGroupComponent;
  let fixture: ComponentFixture<HasNoGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HasNoGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HasNoGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
