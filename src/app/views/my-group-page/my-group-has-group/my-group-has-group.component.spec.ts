import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyGroupHasGroupComponent } from './my-group-has-group.component';

describe('MyGroupHasGroupComponent', () => {
  let component: MyGroupHasGroupComponent;
  let fixture: ComponentFixture<MyGroupHasGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyGroupHasGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyGroupHasGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
