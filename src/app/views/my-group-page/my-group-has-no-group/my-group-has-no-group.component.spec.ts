import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyGroupHasNoGroupComponent } from './my-group-has-no-group.component';

describe('MyGroupHasNoGroupComponent', () => {
  let component: MyGroupHasNoGroupComponent;
  let fixture: ComponentFixture<MyGroupHasNoGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyGroupHasNoGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyGroupHasNoGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
