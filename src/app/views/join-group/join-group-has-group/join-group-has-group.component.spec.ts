import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinGroupHasGroupComponent } from './join-group-has-group.component';

describe('JoinGroupHasGroupComponent', () => {
  let component: JoinGroupHasGroupComponent;
  let fixture: ComponentFixture<JoinGroupHasGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinGroupHasGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinGroupHasGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
