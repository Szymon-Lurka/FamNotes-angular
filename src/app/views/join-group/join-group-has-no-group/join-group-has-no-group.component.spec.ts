import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinGroupHasNoGroupComponent } from './join-group-has-no-group.component';

describe('JoinGroupHasNoGroupComponent', () => {
  let component: JoinGroupHasNoGroupComponent;
  let fixture: ComponentFixture<JoinGroupHasNoGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinGroupHasNoGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinGroupHasNoGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
